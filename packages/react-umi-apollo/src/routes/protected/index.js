import { toggleSignIn, useAuth } from '@/utils/auth';
import Authorized from '@/components/Authorized';

import 'firebase/auth';

function SignIn() {
  return (
    <div>
      <button onClick={() => toggleSignIn()}>
        Login with Github
      </button>
    </div>
  );
}

export default function ({ children }) {
  const { user } = useAuth();

  return (
    <Authorized user={user} fallback={<SignIn />}>
      {children}
    </Authorized>
  );
}
