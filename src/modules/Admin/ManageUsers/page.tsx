'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import React, { useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useUsers } from '../hooks/useUsers';
import { useDeleteUser } from '../hooks/useDeleteUser';

const TABLE_HEAD = ['Name', 'Email', 'Account open', 'Action'];

const TABLE_ROWS = [
  {
    name: 'John Michael',
    date: '23/04/18',
    email: 'john@example.com',
  },
  {
    name: 'Alexa Liras',
    date: '23/04/18',
    email: 'alexa@example.com',
  },
  {
    name: 'Laurent Perrier',
    date: '19/09/17',
    email: 'laurent@example.com',
  },
  {
    name: 'Michael Levi',
    date: '24/12/08',
    email: 'michael@example.com',
  },
  {
    name: 'Laurent Perrier',
    date: '19/09/17',
    email: 'laurent@example.com',
  },
  {
    name: 'Michael Levi',
    date: '24/12/08',
    email: 'michael@example.com',
  },
];

type Props = {};

const ManageUsers = (props: Props) => {
  const { users } = useUsers();
  const { handleDelete } = useDeleteUser();

  const [searchText, setSearchText] = useState('');

  const filteredRows = TABLE_ROWS.filter((row) =>
    row.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-blue-gray-100 justify-center flex-1 text-black">
        <div className="text-center text-white text-3xl bg-black p-3 m-4 rounded-md">
          Manage Users
        </div>
        <div className="m-6 bg-blue-gray-100">
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 "
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
