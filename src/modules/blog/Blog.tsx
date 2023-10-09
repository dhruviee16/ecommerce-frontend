import Image from 'next/image';
import Image1 from '/public/image/HomeImages/blog.png';
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[85vh]">
        <div className=" w-[50%] p-10 rounded-lg">
          <h1 className=" text-3xl lg:text-4xl font-bold leading-9 text-blue-gray-900">
            The Creative Heaven:
            <br />
            Exploring the World of Art, Craft, and Stationery
          </h1>
          <p className="mt-8 gap-y-6 font-normal text-lg leading-6 text-gray-700">
            In a world filled with screens and digital distractions,
            there&apos;s something profoundly satisfying about putting pen to
            paper, creating beautiful art, or crafting unique creations with
            your own hands. That&apos;s the magic of art, craft, and
            stationery—the ability to express yourself and bring your
            imagination to life. Welcome to our Creative Haven, your one-stop
            destination for all things artistic, crafty, and stationery-related!
          </p>

          <p className="mt-6 gap-y-6 font-normal text-lg leading-6 text-gray-700">
            <b>The Artistic Journey</b> <br /> Art has the power to convey
            emotions, tell stories, and connect with the soul. At The Creative
            Haven, we celebrate art in all its forms. From acrylic paints and
            watercolors to charcoal sketches and digital tools, our extensive
            range of art supplies caters to beginners, seasoned artists, and
            everyone in between. Dive into a world of vibrant colors, unleash
            your creativity, and watch your ideas come to life on canvas.
          </p>

          <p className="mt-6 gap-y-6 font-normal text-lg leading-6 text-gray-700">
            <b> Crafting Wonders</b> <br /> Crafting is not just a hobby;
            it&apos;s a way of life! Whether you&apos;re a DIY enthusiast, a
            seasoned crafter, or simply looking for a fun project, our craft
            supplies have you covered. Explore a treasure trove of materials,
            from fabrics and beads to knitting kits and woodworking tools.
            Create personalized gifts, stylish home decor, or embark on exciting
            DIY adventures with our wide array of crafting essentials.
          </p>
          <p className="mt-6 gap-y-6 font-normal text-lg leading-6 text-gray-700">
            <b> Inspiration Awaits</b> <br /> The Creative Heaven is more than
            just an ecommerce store; it&apos;s a source of inspiration and a hub
            for creative minds. Be inspired by our blog, where we share tips,
            tutorials, and stories from the world of art, craft, and stationery.
            Discover new techniques, explore emerging trends, and connect with a
            community that shares your passion for creativity.
            <br />
            <br />
            <b> Customer-Centric Approach</b> <br />
            We understand that your creative journey is unique, and our mission
            is to support you every step of the way. With a commitment to
            quality, affordability, and customer satisfaction, we&apos;re here
            to provide you with the tools and supplies you need to turn your
            artistic dreams into reality.
            <br />
            Whether you&apos;re a budding artist, a DIY enthusiast, or someone
            who appreciates the simple joy of beautiful stationery, The Creative
            Heaven is your heaven of creativity. Join us in celebrating the
            world of art, craft, and stationery, and let your imagination run
            wild. Start your creative journey with us today, and let&apos;s make
            the world a more colorful and imaginative place together. Welcome to
            The Creative Heaven—the place where creativity knows no bounds!
            HAPPY SHOPPING!
          </p>
        </div>
        <div className="grow-0">
          <Separator orientation="vertical" className="border-1" />
        </div>
        <div className="mt-2">
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

export default Profile;
