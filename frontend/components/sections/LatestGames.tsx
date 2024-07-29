import Image from "next/image";
import React from "react";
import GoldenGala from "@/public/golden-gala.png";
import FruitsOfEgypt from "@/public/fruits-of-egypt.png";
import LolliFruits from "@/public/lolli-fruits.jpeg";

const games = [
  {
    name: "Golden Gala",
    image: GoldenGala,
  },
  {
    name: "Fruits of Egypt",
    image: FruitsOfEgypt,
  },
  {
    name: "Lolli Fruits",
    image: LolliFruits,
  },
];

function LatestGames() {
  return (
    <div className="relative w-full bg-gradient-to-tr from-gradientFirstColor to-gradientSecondColor mt-10 flex flex-col items-center font-dmMono pb-[5rem] z-20 rounded-b-[80px]">
      <div className="absolute inset-0 z-20">
        <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[0.10] before:rounded-full before:blur-lg before:w-[150px] before:h-[150px] before:top-[-20px] before:left-[-30px] sm:before:w-[200px] sm:before:h-[200px] sm:before:top-[-30px] sm:before:left-[-45px] md:before:w-[250px] md:before:h-[250px] md:before:top-[-40px] md:before:left-[-55px] lg:before:w-[300px] lg:before:h-[300px] lg:before:top-[-50px] lg:before:left-[-60px]'></div>
      </div>
      <div className="relative flex flex-col gap-[1.5rem] w-[83%] mt-20 z-10">
        <h1 className="text-[2rem] text-orange">Latest games</h1>
        <p className="text-[1.5rem] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="relative flex flex-col items-center sm:flex-row w-full sm:w-[83%] gap-8 sm:gap-20 justify-center sm:justify-between pt-[2rem] z-10 pb-14">
        {games.map((game, index) => (
          <div
            className="relative w-full max-w-[380px] h-[440px] aspect-square overflow-hidden p-[1rem]"
            key={index}
          >
            <div className="relative w-full h-full bg-gradient-to-tr from-gradientThirdColor to-gradientFourthColor p-[1px] rounded-[40px] shadow-md">
              <div className="relative w-full h-full">
                <Image
                  src={game.image}
                  alt={game.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[40px]"
                />
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 shadow-lg">
                  <button
                    disabled
                    className="bg-white text-black py-3 px-4 rounded-xl shadow-lg whitespace-nowrap text-darkCherry font-semibold"
                  >
                    {game.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2">
        <button className="bg-white text-black py-2 px-4 rounded-xl shadow-lg whitespace-nowrap w-40 h-14 text-darkCherry font-semibold">
          Explore all
        </button>
      </div>
    </div>
  );
}

export default LatestGames;