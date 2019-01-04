import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import { toggleSignIn } from '@/utils/auth';
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
  const { user } = useAuthState(firebase.auth());

  return (
    <Authorized user={user} fallback={<SignIn />}>
      {children}
    </Authorized>
  );
}
