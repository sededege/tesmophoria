import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Member = ({ photo, name, user, discord, details, curiosity, role }) => {
  const color = (a) => {
    console.log(a)
    if (a === "COLLAB MANAGER") {
      return "text-red-500";
    }
    if (a === "DERUG LEADER") {
      return "text-yellow-500";
    }
    if (a === "RUG ANALYST") {
      return "text-green-500";
    }
    if (a === "COMMUNITY LEADER") {
      return "text-blue-500";
    }
    if (a === 'SUPPORT LEADER') {
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
    <div className=" bg-[#151f2b] w-[300px] text-white text-[1.2rem] font text-center p-4 rounded-lg relative mt-20">
      <img
        className="rounded-full w-[120px] mx-auto absolute -top-[60px] left-[calc(150px-60px)]"
        src={photo}
      />
      <div className="mt-16">
        <h1 className="font-bold">{name}</h1>
        {/* <h2>{user}</h2>
      <h2>{discord}</h2> */}
        <h2 className="text-[0.9rem] mt-2 h-[50px]">{details}</h2>
        {/*         <h2 className="text-[1rem] mt-4">"{curiosity}"</h2>
         */}

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
