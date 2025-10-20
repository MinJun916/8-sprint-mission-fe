'use client';

import api from '@/lib/api.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { setAccessToken } from '@/lib/token.js';

export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const res = await api.get('/auth/me');
      return res.data;
    },
    retry: false,
  });
};

export const useSignin = () => {
  const queryClient = useQueryClient();
  const signin = useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await api.post('/auth/signin', { email, password });
      return res.data;
    },
    onSuccess: (data) => {
      const tokenFromBody = data?.data?.accessToken;
      if (tokenFromBody) setAccessToken(tokenFromBody);
      queryClient.setQueryData(['authStatus'], { isAuthenticated: true });
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });
  return signin;
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  const signup = useMutation({
    mutationFn: async ({ email, password, nickname }) => {
      const res = await api.post('/auth/signup', { email, password, nickname });
      return res.data;
    },
    onSuccess: (data) => {
      const tokenFromBody = data?.data?.accessToken;
      if (tokenFromBody) setAccessToken(tokenFromBody);
      queryClient.setQueryData(['authStatus'], { isAuthenticated: true });
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });
  return signup;
};

export const useAuthStatus = () => {
  return useQuery({
    queryKey: ['authStatus'],
    queryFn: async () => {
      try {
        const res = await api.get('/auth/me');
        return { isAuthenticated: true, user: res.data };
      } catch {
        return { isAuthenticated: false, user: null };
      }
    },
    staleTime: 0,
    retry: false,
  });
};
