'use client';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/Arty-US_logo.png';

// const LINKS = [
//   {
//     title: 'Product',
//     items: ['category', 'Featured', 'Solutions', 'Tutorials'],
//   },
//   {
//     title: 'Company',
//     items: ['About us', 'Contact us', 'Press', 'News'],
//   },
//   {
//     title: 'Resource',
//     items: ['Blog', 'Newsletter', 'Events', 'Help center'],
//   },
// ];
const LINKS = [
  {
    title: 'Products',
    items: [
      {
        title: 'acrylic colors',
        link: '/acrylic-colors',
      },
      {
        title: 'stationery kits',
        link: '/Stationery-kits',
      },
      {
        title: 'vintage diaries',
        link: '/vintage-diaries',
      },
      {
        title: 'customized planners',
        link: '/customized-planners',
      },
      {
        title: 'desk supplies',
        link: '/desk-supplies',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        title: 'About Us',
        link: '/aboutus',
      },
    ],
  },
  {
    title: 'Resource',
    items: [
      {
        title: 'Blog',
        link: '/blog',
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full bg-transparent  mt-5 z-50">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Link href="/">
            <Image src={logo} alt="" height={140} width={140} />
          </Link>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map(({ title, link }, key) => (
                  <li key={key}>
                    <Link href={link}>
                      <Typography
                        as="text"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {title}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Arty Us. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
