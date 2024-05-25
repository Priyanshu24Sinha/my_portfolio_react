import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        An engineering student in the department of Electronics and communication engineering and a
         huge interest towards competitive programming and web development.
        I have keen interest on upcoming technologies and softwares.
        I have been learning web development and practising data structure and algorithm from a
         long time,
          you can watch some of my achievements by going through my profile in the portfolio section.
        </p>

        <br />

        <p className="text-xl">
       
          I have done my matriculation and class XII from vivekananda central school Hazaribag with 9.6 CGPA and 89.2% respectively.
        </p>
      </div>
    </div>
  );
};

export default About;