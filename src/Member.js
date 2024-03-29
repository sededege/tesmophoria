import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Member = ({ photo, name, user, discord, details, curiosity, role }) => {
  const color = (a) => {
    if (a === "CORE TEAM") {
      return "text-red-500";
    }
    if (a === "DEVELOPER") {
      return "text-yellow-500";
    }
    if (a === "RUG ANALYST") {
      return "text-green-500";
    }
    if (a === "COMMUNITY DIRECTOR") {
      return "text-blue-500";
    }
    if (a === 'DISCORD MANAGER') {
      return "text-sky-500";
    }
    if (a === 'ADVISOR') {
      return "text-purple-500";
    }
    if (a === 'DEV LEADER') {
      return "text-pink-500";
    }
  };
  return (
    <div className=" bg-[#151f2b] w-[300px] mx-auto text-white text-[1.2rem] p-6 font text-center rounded-lg relative mt-20">
      <img
        className="rounded-lg w-[100px] h-[120px] object-cover mx-auto absolute -top-[60px] left-[calc(150px-50px)]"
        src={photo}
      />
      <div className="mt-16">
        <h1 className="font-bold">{name}</h1>
     
        <h2 className="text-[0.9rem] mt-2 h-[50px]">{details}</h2>
        

        <h2 className={`${color(role)} text-[1rem] mt-4 uppercase font-semibold`}>{role}</h2>

        <a
          className="flex justify-center mt-4"
          href={`https://twitter.com/${user}`}
        >
          <AiOutlineTwitter className="text-white hover:text-sky-500" />
        </a>
      </div>
    </div>
  );
};

export default Member;
