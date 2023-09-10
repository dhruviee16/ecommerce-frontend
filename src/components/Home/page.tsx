'use client';

import Image from 'next/image';
import CategoryCircles from './CategoryCircles';
import HomeProducts1 from './HomeProducts';
import poster from 'public/image/HomeImages/stationery.jpg';

function HomePage() {
  return (
    <div>
      <div className="HomeImgThink">
        <Image
          src={poster}
          className='object-cover object-center w-[100%] h-[100vh]'
          alt="Everthing that you think IMAGE"
        />
      </div>
      <div className="space-y-3">
        <CategoryCircles />
      </div>

      <div>
        <HomeProducts1></HomeProducts1>
      </div>
      <div className="HomeImages flex space-y-3 flex-row pl-20 pb-5">
        <div className="flex space-y-3">
          <Image
            src="/image/HomeImages/RowImages.jpg"
            alt="Knives,Brushes,Pallets"
            height={400}
            width={800}
          />
        </div>
        <div className="flex flex-col pl-10">
          <div>
            <Image
              src="/image/HomeImages/RowImages.jpg"
              alt="Knives,Brushes,Pallets"
              height={200}
              width={300}
            />
          </div>
          <div className="pr-10 pt-5">
            <Image
              src="/image/HomeImages/RowImages.jpg"
              alt="Knives,Brushes,Pallets"
              height={200}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
