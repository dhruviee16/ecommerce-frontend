'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { useCompanies } from '../hooks/useCompanies';
import { useDeleteUser } from '../hooks/useDeleteUser';

const TABLE_HEAD = ['Name', 'Email', 'Account open', 'Action'];


type Props = {};

const ManageServiceProviders = (props: Props) => {
  const { companies } = useCompanies();
  const { handleDelete } = useDeleteUser();

  const [searchText, setSearchText] = useState('');

  
  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-gray-200 justify-center flex-1 text-black">
        <div className="text-center text-black text-3xl font-bold m-4 ">
          Manage Traders
        </div>
        <div className="m-6 bg-gray-100">
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-gray-200 bg-blue-gray-100 p-4"
                    >
                      <Typography
                        variant="small"
                        color="black"
                        className="font-bold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => {
                  const isLast = index === companies.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={company.id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {company.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {company?.user?.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {company.createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          onClick={() => {
                            handleDelete(company.user?.id);
                          }}
                          variant="text"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceProviders;
