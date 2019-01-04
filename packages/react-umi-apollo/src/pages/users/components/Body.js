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
        if(error.networkError && error.networkError.statusCode) {
          return <AuthenticationError />;
        }

console.log(error)
        return 'Error loading data. I don\'t know what happened :(';
      }

      if (loading) {
        return 'Loading...';
      }

      return <UserList users={data.search.nodes} />;
    }}
    </Query>
  );
}

function AuthenticationError() {
  return (
    <div>
      <p>Error loading data :( The authorization is not build yet :(</p>
      <p>But we can solve it :) Please manually <a target="_blank" rel="noopener noreferrer" href="https://github.com/settings/tokens">create a github access token</a> and add it as Local Storage item with key <code>auth:token</code>.</p>
      <p>You should grant the following rights for the access token <code>public_repo, repo:status, user</code></p>
    </div>
  );
}
