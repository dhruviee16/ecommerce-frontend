"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import ProductInfo from "./ProductInfo";
import TraderInfo from "./TraderInfo";
 
export default function VerticalTabs() {
  const data = [
    {
      label: "Profile",
      value: "html",
      desc: <TraderInfo/>
    },
    {
      label: "Dashboard",
      value: "react",
      desc: <ProductInfo />,
    },
    
  ];
 
  return (
    <div className="h-screen m-10 ">
    <Tabs value="html" orientation="vertical">
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