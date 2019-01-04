import { setContext } from 'apollo-link-context';
import { getAuthToken } from '@/utils/auth';

const authLink = setContext(async (_, { headers }) => {
  const token = await getAuthToken();
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
