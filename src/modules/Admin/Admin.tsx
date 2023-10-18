
import { Sidebar } from '@/components/Sidebar';

const Dashboard = () => {
  return (
    
    <Sidebar items={[{
        title:"Users",
        href : "/admin/users"
      },{
        title:"Traders",
        href : "/admin/trader"
      },
      {
        title:"Orders",
        href : "/admin/order"
      },]} />
      
  );
};

export default Dashboard ;  
