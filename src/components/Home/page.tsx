'use client';

import Image from 'next/image';
import Link from 'next/link';
import poster from 'public/image/HomeImages/vector19.png';
import banner from 'public/image/HomeImages/vector6.jpg';
import CategoryCircles from './CategoryCircles';
import HomeProducts1 from './HomeProducts';
import { useCurrentUserQuery } from '@/generated/graphql';

function HomePage() {
  const { data } = useCurrentUserQuery();

  return (
    <>
      <div className="">
        <Image
          src={poster}
          className="object-cover object-center w-[100%] h-[60vh] "
          alt="Everthing that you think IMAGE"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:block md:absolute md:right-72 md:top-48">
        <div className="m-5 md:m-0">
          <div className="text-black md:text-start font-bold text-sm md:text-3xl gap-4">
            <div className="text-center md:text-start text-2xl md:text-4xl">
              Become Artious with ArtyUS
            </div>
            <div className="mt-2 text-center md:text-start md:text-xl">
              Imagine crafts, Imagine us
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/desk-supplies">
            <button className="bg-white text-black sm:bg-black sm:text-white py-2 px-4 border-black border-2 text-center font-medium text-sm hover:bg-white transition-colors duration-200 hover:text-black">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        <CategoryCircles />
      </div>

      <div>
        <HomeProducts1 />
      </div>

      <div className="flex flex-row justify-center items-center m-10 h-96 gap-5 p-10">
        <div className="flex space-y-3">
          <Image
            src="/image/HomeImages/vector14.jpg"
            alt="Knives,Brushes,Pallets"
            className="object-contain"
            height={200}
            width={800}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:block md:absolute md:left-32 md:top-50">
          <div className="m-5 md:m-0">
            <div className="text-black md:text-start font-bold text-sm md:text-sm gap-2">
              <div className="text-center md:text-start text-lg md:text-lg">
                CREATIVE ESSENTIALS
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/pencils">
              <button className="bg-white text-black sm:bg-black sm:text-white py-2 px-4 border-black border-2 text-center font-medium text-sm hover:bg-white transition-colors duration-200 hover:text-black">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/image/HomeImages/row.jpg"
            alt="Knives,Brushes,Pallets"
            height={200}
            width={800}
          />
          <div className="flex flex-col justify-center items-center md:block md:absolute md:right-28 md:top-16">
            <div className="m-5 md:m-0">
              <div className="text-black md:text-start font-bold text-sm md:text-sm gap-2">
                <div className="text-center md:text-start text-lg md:text-lg">
                  EXPRESS YOURSELF WITH OUR ARTFUL STATIONERY
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/stationery-kits">
                <button className="bg-white text-black sm:bg-black sm:text-white py-2 px-4 border-black border-2 text-center font-medium text-sm hover:bg-white transition-colors duration-200 hover:text-black">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative m-10 p-10 text-center">
        <Image
          src={banner}
          alt="Knives,Brushes,Pallets"
          className="object-cover object-center w-[100%] h-[50vh] "
        />
        <div className="flex flex-col justify-center items-center md:block md:absolute md:left-96 md:top-24">
          <div className="m-5 md:m-0">
            <div className="text-black md:text-start font-bold text-xl md:text-sm gap-2">
              <div className="text-center md:text-start text-xl md:text-xl">
                CURATING CREATIVITY THROUGH OUR ARTFUL SUPPLIES
                {/* <div className="mt-4"> */}
                {data?.currentUser ? (
                  <Link href="/journals">
                    <button className="bg-white text-black sm:bg-black sm:text-white py-2 px-4 border-black border-2 text-center font-medium text-sm hover:bg-white transition-colors duration-200 hover:text-black ml-4">
                      SHOP NOW
                    </button>
                  </Link>
                ) : (
                  <Link href="/auth/BecomeTrader">
                    <button className="bg-white text-black sm:bg-black sm:text-white py-2 px-4 border-black border-2 text-center font-medium text-sm hover:bg-white transition-colors duration-200 hover:text-black ml-4">
                      JOIN NOW
                    </button>
                  </Link>
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
