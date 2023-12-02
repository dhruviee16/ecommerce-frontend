'use client';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import OrderHistory from './OrderHistory';
import TraderInfo from './TraderInfo';
import TraderProducts from './TraderProducts';

export default function SideBar() {
  const data = [
    {
      label: 'Profile',
      value: 'Profile',
      desc: <TraderInfo />,
    },
    {
      label: 'Dashboard',
      value: 'Dashboard',
      desc: <TraderProducts />,
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
