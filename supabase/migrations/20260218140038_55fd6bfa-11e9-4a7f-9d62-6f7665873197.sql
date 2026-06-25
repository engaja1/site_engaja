
-- 1. Criar enum de roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. Criar tabela user_roles
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- 3. Habilitar RLS na tabela user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Criar função has_role com SECURITY DEFINER (agora o tipo existe)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 5. Policy na user_roles (has_role já existe)
CREATE POLICY "Admins can manage roles"
  ON public.user_roles
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 6. Atualizar políticas das tabelas existentes para usar has_role

-- blog_posts
DROP POLICY IF EXISTS "Admins can manage all posts" ON public.blog_posts;
CREATE POLICY "Admins can manage all posts"
  ON public.blog_posts
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- jobs
DROP POLICY IF EXISTS "Admins can manage all jobs" ON public.jobs;
CREATE POLICY "Admins can manage all jobs"
  ON public.jobs
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- contact_submissions
DROP POLICY IF EXISTS "Admins can view submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- job_applications
DROP POLICY IF EXISTS "Admins can view applications" ON public.job_applications;
CREATE POLICY "Admins can view applications"
  ON public.job_applications
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- profiles: admins podem gerenciar qualquer perfil
DROP POLICY IF EXISTS "Admins can manage profiles" ON public.profiles;
CREATE POLICY "Admins can manage profiles"
  ON public.profiles
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
