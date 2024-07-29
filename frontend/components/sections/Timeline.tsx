import React from 'react';

const timelineData = [
  { year: 2019, text: "Sunt nostrud amet sint do" },
  { year: 2020, text: "Exercitation veniam consequat" },
  { year: 2021, text: "Velit officia consequat duis" },
  { year: 2022, text: "Ullamco est sit aliqua dolor" },
  { year: 2023, text: "Amet minim mollit non deserunt" },
];

export default function Timeline() {
  return (
    <div className=" p-8 rounded-3xl">
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute w-full h-0.5 bg-purple-700 top-1/2 transform -translate-y-1/2"></div>
        
        {/* Timeline items */}
        <div className="relative z-10 flex justify-between">
          {timelineData.map((item, index) => (
            <div key={item.year} className="flex flex-col items-center">
              {/* Year and dot */}
              <div className="mb-2">
                <div className="w-4 h-4 rounded-full bg-purple-700 mb-1"></div>
                <div className="text-purple-700 font-bold">{item.year}</div>
              </div>
              
              {/* Text */}
              <div className={`text-center text-purple-700 max-w-[150px] ${index % 2 === 0 ? '-mt-24' : 'mt-8'}`}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}