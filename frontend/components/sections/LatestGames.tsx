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
    <div className="w-full h-[900px] bg-gradient-to-tr from-gradientFirstColor to-gradientSecondColor mt-10 flex flex-col items-center font-dmMono ">
      <div className="absolute inset-0 z-0">
        <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[0.10] before:rounded-full before:blur-lg before:w-[150px] before:h-[150px] before:top-[-20px] before:left-[-30px] sm:before:w-[200px] sm:before:h-[200px] sm:before:top-[-30px] sm:before:left-[-45px] md:before:w-[250px] md:before:h-[250px] md:before:top-[-40px] md:before:left-[-55px] lg:before:w-[300px] lg:before:h-[300px] lg:before:top-[-50px] lg:before:left-[-60px]'></div>
      </div>
      <div className="flex flex-col gap-[1.5rem] w-[83%] mt-[2%]">
        <h1 className="text-[2rem] text-orange font-bold">Latest games</h1>
        <p className="text-[1.5rem] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="flex w-[83%] gap-20 justify-between pt-[2rem]">
        {games.map((game, index) => (
            <div className="relative w-1/3 aspect-square overflow-hidden shadow-md rounded-[40px] bg-gradient-to-tr from-gradientFourthColor to-gradientThirdColor p-[1rem]" key={index}>
              <Image
                src={game.image}
                alt={game.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
        ))}
      </div>
    </div>
  );
}

export default LatestGames;