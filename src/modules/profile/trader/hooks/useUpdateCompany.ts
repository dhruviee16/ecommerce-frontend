import { useUpdateCompanyMutation } from '@/generated/graphql';
import { TraderRegisterSchema } from '@/modules/auth/schema/traderRegisterSchema';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useCompany } from './useCompany';

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
    const { description, shopAddress:address, shopContactNumber: contactNumber } = TraderRegisterSchema.omit([
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
    'confirmPassword',
    'email',
    'id',
    'name',
    'password',
    'address',
    'contactNumber',
  ]).cast(
    {
      company,
      description: company?.description,
      companyName: company?.name,
      shopAddress: company?.address?.address,
      shopContactNumber: company?.address?.contactNumber,
    },
    {
      assert: false,
      stripUnknown: false,
    }
  );

  const validationSchema = TraderRegisterSchema.omit([
    'confirmPassword',
    'email',
    'id',
    'name',
    'password',
    'address',
    'contactNumber',
  ]);

  return {
    initialValues,
    handleSubmit,
    validationSchema,
    loading,
    error,
  };
};
