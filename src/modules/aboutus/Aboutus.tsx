// import Image from 'next/image';
// import AboutUsImg from 'public/AboutUs/about-us.png';

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[85vh]">
        <div className=" w-[50%] p-10 rounded-lg">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-900">
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
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
