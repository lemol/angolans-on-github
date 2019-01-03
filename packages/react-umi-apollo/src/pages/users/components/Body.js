import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserList from './UserList';

const USERS_SEARCH_QUERY = gql`
  query UsersSearchQuery($queryString: String!) {
    search(query: $queryString, first: 20, type: USER) {
      nodes {
        ...on User {
          avatarUrl
          name
          login
        }
      }
    }
  }
`;

export default function() {
  return (
    <Query query={USERS_SEARCH_QUERY} variables={{ queryString: 'location:angola' }}>
    {({ data, error, loading }) => {
      if (error) {
        return 'Error loading data.';
      }

      if (loading) {
        return 'Loading...';
      }

      return <UserList users={data.search.nodes} />;
    }}
    </Query>
  );
}
