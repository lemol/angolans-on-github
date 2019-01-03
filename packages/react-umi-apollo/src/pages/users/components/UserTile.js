export default function UserTile({ user: { name, login, avatarUrl } }) {
  return (
    <div>
      <img src={avatarUrl} alt={name} />
      <p>{login}</p>
    </div>
  );
}
