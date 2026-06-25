
-- Remove a política pública atual
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Profiles are public" ON profiles;

-- Cria política restritiva: cada usuário vê apenas o próprio perfil
CREATE POLICY "Users can only view their own profile"
  ON profiles
  FOR SELECT
  USING (auth.uid() = id);
