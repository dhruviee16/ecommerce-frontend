import Image from 'next/image';
import Image1 from '/public/image/HomeImages/profile1.png';
import { Separator } from '@/components/ui/separator';

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-left items-left min-h-[85vh]">
        <div className=" w-[50%] p-10 rounded-lg">
          <h1 className=" mt-12 text-3xl lg:text-4xl font-bold leading-9 text-gray-900">
            About Us
          </h1>
          <p className="mt-4 gap-y-6 font-normal text-lg leading-6 text-gray-700">
            Welcome to ArtyUs the ultimate destination for all things art,
            craft, and stationery. We are not just an ecommerce platform; we are
            a vibrant community of artists, crafters, and enthusiasts who share
            a passion for creativity.our idea is to create a space where artists
            and creators of all levels could come together to find the finest
            quality art supplies, unique craft materials, and stylish stationery
            products.Our mission is to empower creativity.We believe that art,
            craft, and stationery items are not just products; they are tools of
            self-expression, catalysts for personal growth,They are the building
            blocks of imagination, the brushes that color our world, and the
            tools that turn ordinary moments into extraordinary memories.Our
            platform is designed to make these tools accessible to everyone.
            Whether you are a professional artist or a hobbyist, a student or a
            teacher, a homemaker or a working professional, you will find
            everything you need to unleash your creativity at ArtyUs.We are
            committed to providing you with a seamless shopping experience and
            exceptional customer service. We are constantly working to improve
            our platform and add new products to our catalog.
          </p>
          <p className="mt-4 gap-y-6 font-normal text-lg leading-6 text-gray-700">
            We Offer Artistic Excellence with our carefully curated selection of
            top-notch art supplies, from paints and brushes to sketchbooks and
            canvases. Unleash your inner crafter with our extensive range of
            unique craft materials, from colorful craft materials to handmade
            papers and Elevate your everyday life with our stylish and
            functional stationery products; From elegant journals to cute
            stationery stuffs, we have got your stationery needs covered.
          </p>
        </div>
        <div className="grow-0">
          <Separator orientation="vertical" className="border-1" />
        </div>
        <div className="">
          <Image
            src={Image1}
            alt="profile"
            className="object-contain  w-[739px]"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
