import Image from "next/image";

const Categories = [
    {
        id: 1,
        name: 'Resin',
        href: '#',
        imageSrc:
            "/image/HomeImages/ResinCircle.jpg",
        imageAlt: 'Resin Art',
    },
    {
        id: 2,
        name: 'Diaries',
        href: '#',
        imageSrc:
            "/image/HomeImages/DiariesCircle.jpg",
        imageAlt: 'Diaries',
    },
    {
        id: 3,
        name: 'Craft Circle',
        href: '#',
        imageSrc:
            "/image/HomeImages/CraftCircle.jpg",
        imageAlt: 'Craft Material',
    },
    {
        id: 4,
        name: 'Sketch Supplies',
        href: '#',
        imageSrc:
            "/image/HomeImages/SketchCircle.jpg",
        imageAlt: 'Sketch Supplies',
    },
    {
        id: 5,
        name: 'Crayons',
        href: '#',
        imageSrc:
            "/image/HomeImages/crayonsCircle.jpg",
        imageAlt: 'Sketch Supplies',
    },
    {
        id: 6,
        name: 'School Supplies',
        href: '#',
        imageSrc:
            "/image/HomeImages/SchoolSuppliesCircle.jpg",
        imageAlt: 'Sketch Supplies',
    },
];

function CategoryCircles() {
    return (
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center my-6">
            {Categories.map((category) => (
                <div key={category.id} >
                    <div className="flex flex-col hover:text-blue-500">
                        <Image className="rounded-full border-2 hover:border-blue-500"
                            src={category.imageSrc}
                            alt={category.imageAlt}
                            height={150}
                            width={150}
                        />
                        <div className="text-center">{category.name}</div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CategoryCircles;