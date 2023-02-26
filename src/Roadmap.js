import React from "react";
import Header from "./Header";
import Headercel from "./Headercel";
import nft from "./assets/1.png";
import Countdown from "react-countdown";

const Roadmap = () => {
  const [number, setNumber] = React.useState("");

  return (
    <div className=" flex justify-center items-center w-full h-[100vh]  md:p-20 ">
      <img 
                      className="my-auto h-full w-full object-contain p-4 md:w-3/4 md:p-0  mx-auto  rounded-lg"
       src='https://media.discordapp.net/attachments/1078717864506298548/1078719550796873808/Roadmap_Thes.png?width=1644&height=1074'/>
{/*       <h1 className=" text-white menu text-[3rem] p-20 text-center flex  ">Coming soon</h1>
 */}      {/*     <div className="w-full h-full  p-20 flex md:flex-row flex-col">
        <div className="w-full h-3/4 flex flex-col">
          <img className="w-3/4 object-contain mx-auto" src={nft} alt="nft" />
          <p className="text-white text-center mt-4">Goddes #1234</p>
        </div>
        <div className="w-full h-[60vh] text-white justify-center flex items-center flex-col text-[1.6rem] md:text-[2rem] menu">
          <p>The raffle will be held in</p>
          <Countdown
            date={Date.now() + 80000000}
           
          />
          <div className="mt-20 text-center">
            <p className="text-white font text-[1rem]">
              Prize: 1 Thesmophoria nft
            </p>
            <p className="text-white font text-[1rem]">
              Only to <span className="font-bold">delisted</span> holders.
            </p>
            <p className="text-white font text-[1rem] underline">Snapshot at any time</p>
            <p className="text-white font text-[1rem]">
              Buy your tickets{" "}
              <a
                href="https://magiceden.io/marketplace/tesmophoria"
                className="text-pink-500 font-bold"
              >
                Magic Eden
              </a>
              .
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Roadmap;
