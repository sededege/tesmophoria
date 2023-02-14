import React from "react";
import Header from "./Header";
import Headercel from "./Headercel";
import nft from "./assets/1.png";
import Countdown from "react-countdown";

const Raffle = () => {
  const [number, setNumber] = React.useState("");

  return (
    <div className="mt-20 flex justify-center items-center w-full h-[90vh]">
      <h1 className=" text-white menu md:text-[3rem] flex  ">Cooming soon</h1>
      {/*     <div className="w-full h-full  p-20 flex md:flex-row flex-col">
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

export default Raffle;
