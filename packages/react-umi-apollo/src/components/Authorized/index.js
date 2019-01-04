export default function ({ user, children, fallback }) {
  if (!user) {
    return fallback;
  }

  return children;
}
