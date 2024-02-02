// components/ProtectedRoute.js
'use client'
import { useRouter } from 'next/router';
import { useAuth } from '../app/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/'); // Redirige a la página de inicio de sesión si no está autenticado
    }
  }, [user, router]);

  return <>{user && children}</>; // Renderiza el contenido solo si el usuario está autenticado
};

export default ProtectedRoute;
