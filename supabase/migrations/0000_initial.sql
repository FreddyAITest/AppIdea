-- Initial Schema for KochPlan

-- 1. Profiles Table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update their own profile." on profiles
  for update using ((select auth.uid()) = id);


-- 2. Recipes Table
create table public.recipes (
  id uuid default gen_random_uuid() primary key,
  author_id uuid references public.profiles(id) on delete cascade not null,
  title_de text not null,
  title_en text,
  description_de text not null,
  description_en text,
  image_url text not null,
  prep_time integer not null,
  servings integer not null,
  ingredients jsonb not null,
  instructions jsonb not null,
  avg_rating numeric(2,1) default 0,
  rating_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.recipes enable row level security;

create policy "Recipes are viewable by everyone." on public.recipes
  for select using (true);

create policy "Authenticated users can insert recipes." on public.recipes
  for insert to authenticated with check (true);

create policy "Users can update their own recipes." on public.recipes
  for update using ((select auth.uid()) = author_id);


-- 3. Weekly Plan Table (managed by admins or service)
create table public.weekly_plan (
  id uuid default gen_random_uuid() primary key,
  recipe_id uuid references public.recipes(id) on delete cascade not null,
  day_of_week integer not null check (day_of_week >= 0 and day_of_week <= 6),
  week_start date not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.weekly_plan enable row level security;

create policy "Weekly plan is viewable by everyone." on public.weekly_plan
  for select using (true);
-- Insert/Update restricted to service_role or specific admin check in actual app


-- 4. Ratings Table
create table public.ratings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  recipe_id uuid references public.recipes(id) on delete cascade not null,
  score integer not null check (score >= 1 and score <= 5),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, recipe_id)
);

alter table public.ratings enable row level security;

create policy "Ratings are viewable by everyone." on public.ratings
  for select using (true);

create policy "Users can vote once per recipe." on public.ratings
  for insert with check ((select auth.uid()) = user_id);

create policy "Users can update their own rating." on public.ratings
  for update using ((select auth.uid()) = user_id);

-- Function to handle new user signup creating a profile record
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
