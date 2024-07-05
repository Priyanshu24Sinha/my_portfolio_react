import React from "react";
import cf from "../assets/portfolio/codeforceslogo.jpg";
import leetcode from "../assets/portfolio/LeetCode.png";
import gfglogo from "../assets/portfolio/gfgPic.jpg"
import projlogo from "../assets/portfolio/projectPIC.png"
import usab from "../assets/portfolio/usab.png"
import proj3img from "../assets/portfolio/gitupic.png"



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name:"Leetcode",
      src: leetcode,
      link: "https://leetcode.com/u/Priyanshu_here/",
    },
    {
      id: 2,
      name:"geekforgeeks",
      src: gfglogo,
      link: "https://www.geeksforgeeks.org/user/priyanshusq5a5/",
    },
    {
      id: 3,
      name:"codeforces",
      src: cf,
      link: "https://codeforces.com/profile/Harsh_here_n_there",
    },
    {
      id: 4,
      name:"Project1",
      src: projlogo,
      link: "https://my-ecom-frontend-zeta.vercel.app/",
    },
    {
      id: 5,
      name: "Project2",
      src: proj3img,
      link: "https://github.com/Priyanshu24Sinha/Parallel-file-encryption",
    },
    {
      id: 6,
      name: "project3",
      src: usab,
      link: "https://priyanshu24sinha.github.io/usability_hub_website_clone/##",
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
          {portfolios.map(({ id, name,  src , link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img 
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[125px] w-[325px]"
              />
              <div className="flex items-center justify-center">
                <a href={link}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {name}
                </button>
                </a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;