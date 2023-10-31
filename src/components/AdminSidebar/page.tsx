'use client';
import { useLogout } from '@/modules/auth/hooks';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { default as Logo, default as SmallLogo } from 'public/Arty-US_logo.png';
import { useState } from 'react';
import { AiOutlineShop } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdLogOut } from 'react-icons/io';
import { PiUserSwitchDuotone } from 'react-icons/pi';
import { RiProductHuntLine } from 'react-icons/ri';

const menuItems = [
  {
    id: 1,
    label: 'Manage Users',
    icon: PiUserSwitchDuotone,
    link: '/admin/manage-users',
  },
  {
    id: 2,
    label: 'Manage Traders',
    icon: AiOutlineShop,
    link: '/admin/manage-traders',
  },
  {
    id: 3,
    label: 'Manage Products',
    icon: RiProductHuntLine,
    link: '/admin/manage-products',
  },
  {
    id: 4,
    label: 'Manage Orders',
    icon: FiShoppingCart,
    link: '/admin/manage-orders',
  },
];

const Sidebar = () => {
  const { logout } = useLogout();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const wrapperClasses = classNames(
    'h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col',
    {
      ['w-72']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );
  const logoClass = classNames('flex items-center pl-1 gap-4 w-[60%] h-[60%]', {
    ['w-80']: !toggleCollapse,
    ['hidden']: toggleCollapse,
  });
  const smallLogoClass = classNames(
    'flex items-center pl-1 gap-4 w-[80%] h-[80%]',
    {
      ['hidden']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );

  const getNavItemClasses = () => {
    return classNames(
      'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap',
      {}
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative nohidden">
          <div className={logoClass}>
            <Image src={Logo} alt="" />
          </div>
          <div className={smallLogoClass}>
            <Image src={SmallLogo} alt="" />
          </div>
          {/* {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <TbLayoutSidebarLeftCollapseFilled size={30} />
            </button>
          )} */}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses();
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link}>
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: '2.5rem' }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <div className={classNames('text-md font-medium ', {})}>
                        {menu.label}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses()} px-3 py-4`}>
        <div style={{ width: '2.5rem' }}>
          <IoMdLogOut />
        </div>
        {!toggleCollapse && (
          <span
            onClick={logout}
            className={classNames('text-md font-medium text-text-light')}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
