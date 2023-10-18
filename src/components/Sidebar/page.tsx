'use client'
import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Disclosure } from '@headlessui/react';
import {
  MdOutlineSpaceDashboard,
  MdOutlineHomeRepairService,
} from 'react-icons/md';

interface SidebarProps {
  items: {
    title: string;
    href: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <>
      <div className=''>
        <div className=''>
          <Disclosure as="nav">
            <Disclosure.Button className="absolute top-[76px] right-2 inline-flex items-end peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
              <GiHamburgerMenu
                className="block lg:hidden h-4 w-4"
                aria-hidden="true"
              />
            </Disclosure.Button>
            <div className=" p-6 w-1/2 h-screen bg-white z-20 fixed -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
              <div className="flex flex-col justify-start item-center">
                <div className=" my-4 border-b border-gray-100 pb-4">
                {items.map((item, index) => (
                <Link href={item.href} key={index}>
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
                </div>
              </div>
            </div>
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default Sidebar;