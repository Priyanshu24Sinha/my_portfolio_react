import React from "react";
import cf from "../assets/portfolio/codeforceslogo.jpg";
import leetcode from "../assets/portfolio/LeetCode.png";
import gfglogo from "../assets/portfolio/gfglogo.png"



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cf,
      link: "https://google.com",
    },
    {
      id: 2,
      src: leetcode,
      link: "https://linkedin.com",
    },
    {
      id: 3,
      src: gfglogo,
      link: "https://linkedin.com",
    },
    {
      id: 4,
      src: leetcode,
      link: "https://linkedin.com",
    },
    {
      id: 5,
      src: leetcode,
      link: "https://linkedin.com",
    },
    {
      id: 6,
      src: leetcode,
      link: "https://linkedin.com",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects and achievemnts</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Open
                </button>
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;