'use client';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';

import UserInfo from './UserInfo';
import OrderHistory from './OrderHistory';

export default function SideBar() {
  const data = [
    {
      label: 'Profile',
      value: 'Profile',
      desc: <UserInfo />,
    },

    {
      label: 'orders',
      value: 'orders',
      desc: <OrderHistory />,
    },
  ];

  return (
    <div className="h-screen m-10 ">
      <Tabs value="Profile" orientation="vertical">
        <TabsHeader className="w-32">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="text-xl font-bold">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
