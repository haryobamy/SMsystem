import { useAppSelector } from '@/lib/redux/store';

export function useUser() {
  return useAppSelector((s) => s.auth.user);
}

export function useToken() {
  return useAppSelector((s) => s.auth.accessToken);
}

export function useIsAuth() {
  const { user, accessToken } = useAppSelector((s) => s.auth);
  return !!user && !!accessToken;
}
