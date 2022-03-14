import { User } from '@firebase/auth';
import { useEffect, useState, FC } from 'react';
import { AuthContext } from '../context/authContext';
import { auth } from '../firebase';

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((fbUser) => {
      console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;