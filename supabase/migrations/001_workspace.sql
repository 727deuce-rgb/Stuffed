create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 80),
  slug text not null,
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(owner_id, slug)
);

alter table public.projects enable row level security;
create policy "Owners can read projects" on public.projects for select using (auth.uid() = owner_id);
create policy "Owners can create projects" on public.projects for insert with check (auth.uid() = owner_id);
create policy "Owners can update projects" on public.projects for update using (auth.uid() = owner_id);
create policy "Owners can delete projects" on public.projects for delete using (auth.uid() = owner_id);

create table if not exists public.project_files (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  path text not null,
  content text not null default '',
  updated_at timestamptz not null default now(),
  unique(project_id, path)
);

alter table public.project_files enable row level security;
create policy "Project owners can manage files" on public.project_files for all using (
  exists (select 1 from public.projects where projects.id = project_files.project_id and projects.owner_id = auth.uid())
) with check (
  exists (select 1 from public.projects where projects.id = project_files.project_id and projects.owner_id = auth.uid())
);
