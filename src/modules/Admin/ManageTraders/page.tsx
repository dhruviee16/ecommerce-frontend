'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import React, { useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useCompanies } from '../hooks/useCompanies';
import { useDeleteUser } from '../hooks/useDeleteUser';

const TABLE_HEAD = ['Name', 'Email', 'Account open', 'Action'];

const TABLE_ROWS = [
  {
    name: 'John Michael',
    date: '23/04/18',
    category: 'Car Services',
    email: 'john@example.com',
  },
  {
    name: 'Alexa Liras',
    date: '23/04/18',
    category: 'Home Services',
    email: 'alexa@example.com',
  },
  {
    name: 'Laurent Perrier',
    date: '19/09/17',
    category: 'Home Services',
    email: 'laurent@example.com',
  },
  {
    name: 'Michael Levi',
    date: '24/12/08',
    category: 'Car Services',
    email: 'michael@example.com',
  },
  {
    name: 'Laurent Perrier',
    date: '19/09/17',
    category: 'Car Services',
    email: 'laurent@example.com',
  },
  {
    name: 'Michael Levi',
    date: '24/12/08',
    category: 'Car Services',
    email: 'michael@example.com',
  },
];

type Props = {};

const ManageServiceProviders = (props: Props) => {
  const { companies } = useCompanies();
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
          Manage Traders
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
                        className="font-normal leading-none opacity-70"
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
