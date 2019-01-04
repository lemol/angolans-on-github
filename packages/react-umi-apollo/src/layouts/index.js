import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Authorized from '@/components/Authorized';
import { signOut } from '@/utils/auth';
import styles from './index.css';

export default function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <UserCorner />
      { props.children }
    </div>
  );
}

function UserCorner() {
  const { user } = useAuthState(firebase.auth());

  return (
    <Authorized user={user} fallback={<></>}>
      <p><button onClick={() => signOut()}>Sign Out</button></p>
    </Authorized>
  );
}