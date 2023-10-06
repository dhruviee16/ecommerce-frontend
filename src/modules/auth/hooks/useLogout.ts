import { useLogoutMutation } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import { TOKEN_NAME } from '.';

export const useLogout = () => {
  const [cookies, setCookies, deleteCookie] = useCookies();

  const router = useRouter();

  const [logoutMutation, { data, loading, error }] = useLogoutMutation({
    onCompleted(data) {
      deleteCookie(TOKEN_NAME);
      deleteCookie('currentUserId');
      deleteCookie('currentCompanyId');

      toast.success('Logged out successfully');

      router.replace('/');
    },
    onError(error) {
      toast.error('Error in logout' + error.message);
    },
  });

  const logout = () => logoutMutation();

  return { logout, loading, error };
};
