'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { useDeleteUser } from '../hooks/useDeleteUser';
import { useUsers } from '../hooks/useUsers';

const TABLE_HEAD = ['Name', 'Email', 'Account open', 'Action'];



type Props = {};

const ManageUsers = (props: Props) => {
  const { users } = useUsers();
  const { handleDelete } = useDeleteUser();

  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-gray-200 justify-center flex-1 text-black">
        <div className="text-center text-black text-3xl font-bold m-4 ">
          Manage Users
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
                        className="font-bold leading-none opacity-70 "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map(({ id, name, email, createdAt }, index) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={email}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          onClick={() => {
                            handleDelete(id);
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

export default ManageUsers;
