import { useUpdateAddressMutation } from '@/generated/graphql';
import { RegisterSchema } from '@/modules/auth/schema';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAddress } from './useAddress';

export const useUpdateAddress = (id: string) => {
  const router = useRouter();

  const { address } = useAddress(id);

  const [updateAddress, { data, loading, error }] = useUpdateAddressMutation({
    onCompleted(data) {
      toast.success('Address Updated successfully');
      router.refresh();
    },
    onError(error) {
      toast.error('Error updating address ' + error.message);
    },
  });

  const handleSubmit = (input: any) => {
    const SanitizedInput = RegisterSchema.omit([
      'confirmPassword',
      'email',
      'password',
      'id',
      'name',
    ]).cast(input, {
      assert: true,
      stripUnknown: true,
    });

    updateAddress({
      variables: {
        id,
        patch: SanitizedInput,
      },
    });
  };

  const initialValues = RegisterSchema.omit([
    'confirmPassword',
    'email',
    'password',
    'id',
    'name',
  ]).cast(address, {
    assert: false,
    stripUnknown: true,
  });

  console.log(initialValues);

  const validationSchema = RegisterSchema.omit([
    'confirmPassword',
    'email',
    'password',
    'id',
    'name',
  ]);

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    data,
    loading,
    error,
  };
};
