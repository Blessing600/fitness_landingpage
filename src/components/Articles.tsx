import React from "react";
import { ArticlesCard } from "./ArticlesCard";

const ArticlesCardProps: Array<{
  title: string;
  title2: string;
  arrow: any;
  food1: any;
}> = [
  {
    title: "Health benefit of vegetables",
    title2: "19, 0ct 2022.",
    arrow: require("../assets/images/arrowblack.png"),
    food1: require("../assets/images/Articles-img1.png"),
  },
  {
    title: "Health benefit of vegetables",
    title2: "19, 0ct 2022.",
    arrow: require("../assets/images/arrowblack.png"),

    food1: require("../assets/images/Articles-img1.png"),
  },
  {
    title: "Health benefit of vegetables",
    title2: "19, 0ct 2022.",
    arrow: require("../assets/images/arrowblack.png"),
    food1: require("../assets/images/Articles-img1.png"),
  },
  {
    title: "Health benefit of vegetables",
    title2: "19, 0ct 2022.",
    arrow: require("../assets/images/arrowblack.png"),
    food1: require("../assets/images/Articles-img1.png"),
  },
  {
    title: "Health benefit of vegetables",
    title2: "19, 0ct 2022.",
    arrow: require("../assets/images/arrowblack.png"),
    food1: require("../assets/images/Articles-img1.png"),
  },
];
const Articles = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-[600]">Articles</h1>
        <p className="text-xl">
          Check out our quick reads that will help you build healthy habits.
        </p>
      </div>

      <div className="w-full h-full   my-2  p-10 grid grid-cols-1 md:grid-cols-5   bg-red-800">
        {ArticlesCardProps.map((item, index) => {
          return (
            <ArticlesCard
              key={index}
              title={item.title}
              title2={item.title2}
              arrow={item.arrow}
              food1={item.food1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
