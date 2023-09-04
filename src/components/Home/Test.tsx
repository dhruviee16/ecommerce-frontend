import Image from 'next/image';

const Test = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center">
        <div className="hover:opacity-75 transition-opacity duration-200 h-auto w-auto bg-slate-4 first-letter:00">
          <Image
            src="/image/HomeImages/DesktopSleeve.jpg"
            alt="image"
            width={450}
            height={450}
            className=""
          />
        </div>
        <div className="flex flex-col justify-start w-full h-full">
          <div>name</div>
          <div>price</div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="hover:opacity-75 transition-opacity duration-200 h-auto w-auto bg-slate-4 first-letter:00">
          <Image
            src="/image/HomeImages/SketchPens.jpg"
            alt="image"
            width={450}
            height={450}
            className=""
          />
        </div>
        <div className="flex flex-col justify-start w-full h-full">
          <div>name</div>
          <div>price</div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="hover:opacity-75 transition-opacity duration-200 h-auto w-auto bg-slate-4 first-letter:00">
          <Image
            src="/image/HomeImages/PaintBrushes.jpg"
            alt="image"
            width={450}
            height={450}
            className=""
          />
        </div>
        <div className="flex flex-col justify-start w-full h-full">
          <div>name</div>
          <div>price</div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="hover:opacity-75 transition-opacity duration-200 h-auto w-auto bg-slate-4 first-letter:00">
          <Image
            src="/image/HomeImages/MiniPigments.jpg"
            alt="image"
            width={450}
            height={450}
            className=""
          />
        </div>
        <div className="flex flex-col justify-start w-full h-full">
          <div>name</div>
          <div>price</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
