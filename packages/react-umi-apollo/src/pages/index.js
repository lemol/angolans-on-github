/*
 * Routes:
 *   - ./src/routes/protected
 */
import Redirect from 'umi/redirect';

export default function() {
  return (
    <Redirect to="/users" />
  );
}
