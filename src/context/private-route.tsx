import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/auth-context';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children
}: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return <>{isAuthenticated && children}</>;
};

export default PrivateRoute;
