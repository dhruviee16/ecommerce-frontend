import { UpdateAddressByCompanyIdInput } from './../../../../generated/graphql';
import { useUpdateCompanyMutation } from '@/generated/graphql';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useCompany } from './useCompany';
import { TraderRegisterSchema } from '@/modules/auth/schema/traderRegisterSchema';

export const useUpdateCompany = (id?: string) => {
  const router = useRouter();

  const { company } = useCompany(id);

  const [updateCompany, { data, loading, error }] = useUpdateCompanyMutation({
    onCompleted(data) {
      toast.success('Company details updated successfully');

      router.refresh();
    },
    onError(error) {
      toast.error('Error updating company ' + error.message);
    },
  });

  const handleSubmit = (input: any) => {
    const { description, address, contactNumber } = TraderRegisterSchema.omit([
      'companyName',
      'confirmPassword',
      'email',
      'id',
      'name',
      'password',
    ]).cast(input, {
      assert: true,
      stripUnknown: true,
    });

    return updateCompany({
      variables: {
        id,
        company: {
          description,
          addressUsingId: {
            updateByCompanyId: {
              companyId: id,
              patch: {
                address,
                contactNumber,
              },
            },
          },
        },
      },
    });
  };

  const initialValues = TraderRegisterSchema.omit([
    'companyName',
    'confirmPassword',
    'email',
    'id',
    'name',
    'password',
  ]).cast(
    {
      company,
      description: company?.description,
      address: company?.address?.address,
      contactNumber: company?.address?.contactNumber,
      companyName: company?.name,
    },
    {
      assert: false,
      stripUnknown: true,
    }
  );

  const validationSchema = TraderRegisterSchema.omit([
    'companyName',
    'confirmPassword',
    'email',
    'id',
    'name',
    'password',
  ]);

  return {
    initialValues,
    handleSubmit,
    validationSchema,
    loading,
    error,
  };
};
