import { RegisterInput, useRegisterMutation } from '@/generated/graphql';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { TOKEN_NAME } from '.';
import { RegisterSchema } from '../schema';

export const useSignup = () => {
  const [cookies, setCookies, deleteCookies] = useCookies();
  const router = useRouter();

  const [signupMutation, { data, loading, error }] = useRegisterMutation({
    onCompleted(data) {
      deleteCookies(TOKEN_NAME);
      deleteCookies('currentUserId');

      setCookies(TOKEN_NAME, data.register?.token);
      setCookies('currentUserId', data.register?.user?.id);

      toast.success('Signed up in successfully');

      router.replace('/');
    },
    onError(error) {
      toast.error('Error signup in' + error.message);
    },
  });

  const handleSubmit = (input: RegisterInput) => {
    const sanitizedInput = RegisterSchema.omit(['confirmPassword']).cast(
      input,
      {
        assert: true,
        stripUnknown: true,
      }
    );

    signupMutation({
      variables: {
        input: sanitizedInput,
      },
    });
  };

  const user = data?.register?.user;

  const initialValues = RegisterSchema.omit(['confirmPassword']).cast(
    {},
    { assert: true, stripUnknown: true }
  );

  return { initialValues, RegisterSchema, handleSubmit, user, loading, error };
};
