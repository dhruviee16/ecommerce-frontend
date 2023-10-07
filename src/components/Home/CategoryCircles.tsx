import Image from 'next/image';
import Link from 'next/link';

const Categories = [
  {
    id: 1,
    name: 'Color',
    href: '/categories/Color',
    imageSrc: '/image/HomeImages/ResinCircle.jpg',
    imageAlt: 'colors',
  },
  {
    id: 2,
    name: 'Diaries',
    href: '/categories/Diaries',
    imageSrc: '/image/HomeImages/DiariesCircle.jpg',
    imageAlt: 'Diaries',
  },
  {
    id: 3,
    name: 'Crafts',
    href: '/categories/Craft',
    imageSrc: '/image/HomeImages/CraftCircle.jpg',
    imageAlt: 'Craft Material',
  },
  {
    id: 4,
    name: 'Sketch Supplies',
    href: '/categories/Sketch-supplies',
    imageSrc: '/image/HomeImages/SketchCircle.jpg',
    imageAlt: 'Sketch Supplies',
  },
  {
    id: 5,
    name: 'Crayons',
    href: '/categories/Crayons',
    imageSrc: '/image/HomeImages/crayonsCircle.jpg',
    imageAlt: 'Sketch Supplies',
  },
  {
    id: 6,
    name: 'School Supplies',
    href: '/categories/School-supplies',
    imageSrc: '/image/HomeImages/SchoolSuppliesCircle.jpg',
    imageAlt: 'Sketch Supplies',
  },
];

function CategoryCircles() {
  return (
    <div className="flex flex-col sm:flex-row gap-14 justify-center items-center my-6">
      {Categories.map((category) => (
        <Link href={category.href} key={category.id}>
          <div className="flex flex-col hover:text-blue-500">
            <Image
              className="rounded-full border-2 hover:border-blue-500"
              src={category.imageSrc}
              alt={category.imageAlt}
              height={175}
              width={175}
            />
            <div className="text-center">{category.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryCircles;
