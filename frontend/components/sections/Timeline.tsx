import React from "react";

enum Possition {
    top = "top",
    bottom = "bottom"
}

const TimelineEvent = ({
  year,
  text,
  position,
}: {
  year: number;
  text: string;
  position: Possition;
}) => (
  <div className="flex flex-col items-center text-cherry">
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-cherry rounded-full relative z-10">
        <div className="w-7 h-7 border-4 border-cherry rounded-full absolute top-[1/2] left-1/2 transform -translate-x-1/2 -translate-y-[20%]"></div>
        <div
          className={`absolute w-0.5 bg-cherry h-12 left-1/2 transform -translate-x-1/2   ${
            position === "bottom" ? "translate-y-[70%]" : "-translate-y-[140%]"
          }`}
        >
          <span
            className={`h-2 w-2 bg-cherry absolute rounded-full transform -translate-x-[40%] ${
              position === "bottom" ? "bottom-0" : "top-0"
            }`}
          />
        </div>

         <div className={`font-bold absolute transform -translate-x-[30%] ${position === "bottom" ? "bottom-6" : "top-6"}`}>{year}</div>

         
      </div>
    </div>
    <p className={`text-wrap text-center w-1/5 md:w-max text-sm absolute transform ${position === Possition.bottom ? "translate-y-[110%] md:translate-y-[500%]" : "-translate-y-[220%] md:-translate-y-[500%]"}`}>{text}</p>
  </div>
);

const Timeline = () => {
  const events = [
    { year: 2019, text: "Sunt nostrud amet sint do", position: Possition.bottom  },
    { year: 2020, text: "Exercitation veniam consequat", position: Possition.top },
    {
      year: 2021,
      text: "Velit officia consequat duis",
      position: Possition.bottom,
    },
    { year: 2022, text: "Ullamco est sit aliqua dolor", position: Possition.top },
    {
      year: 2023,
      text: "Amet minim mollit non deserunt",
      position: Possition.bottom,
    },
  ];

  return (
    <section className="bg-[#F0CDB7] p-36 rounded-b-[80px] w-full h-[32rem] flex items-center justify-center">
      <div className="relative py-8 w-full px-36">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-darkCherry transform -translate-y-1/2"></div>
        <div className="flex justify-between relative z-10">
          {events.map((event, index) => (
            <TimelineEvent
              text={event.text}
              year={event.year}
              position={event.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
