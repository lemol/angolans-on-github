import UserTile from './UserTile';

export default function UserList({ users }) {
  return (
    <div>
      {users.map(user => <UserTile key={user.login} user={user} />)}
    </div>
  );
}
