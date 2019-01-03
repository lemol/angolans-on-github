import { setContext } from 'apollo-link-context';
import { getAuthToken } from '@/utils/auth';

const authLink = setContext((_, { headers }) => {
  const token = getAuthToken();
  const authorizationHeader = token
    ? { authorization: `Bearer ${token}` }
    : {};

  return {
    headers: {
      ...headers,
      ...authorizationHeader,
    },
  };
});

export const extraLinks = [
  authLink,
];
