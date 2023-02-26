import React from "react";
import Header from "./Header";
import Headercel from "./Headercel";
import nft from "./assets/1.png";
import Countdown from "react-countdown";

const Vaults = () => {
  const data = [
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FhNSXmqma4Wj0jG2XxRtSmn_HOLdmiLrg4EHQ27RaBRk%3Fext%3Dpng",
      price: 2.4,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FZkWgUxwGXcr-_MdNN4GpoYcY1zwQk00-PGTaHGcO0uM%3Fext%3Dpng",
      price: 2.3,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2Fy6XuWXsSBcdKhy-HKv3hhaonky3zi2ld0N7sMFaTwLk%3Fext%3Dpng",
      price: 2.9,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FqddEbknfnmA4p-jiGvxOJyk2Vl5lQJW6PcNzqz4vfAg%3Fext%3Dpng",
      price: 8,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FDPyPqgqr0-_fQGlt8ekytCHMP6jNQkkpW4jh2Pweahg%3Fext%3Dpng",
      price: 1.5,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2F-t4G47HblYsk11kPghylw36GCDhGlLoLd2sRVe3u6iw%3Fext%3Dpng",
      price: 3.8,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2Fnz3VGppIVKu3NudrrJfwYreTpoRfE7yDz_IUoqGxEU8%3Fext%3Dpng",
      price: 2,
    },
  ];

  const stake = [
    {
      nft: "Goddes #123",
      image: nft,
      price: 2.9,
    },
    {
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FxNmPWUYARgM2luJKtuAZV5sEAJs08a-GE8B-UPSv9ho%3Fext%3Dpng",
      price: 2.7,
    },
  ];
  return (
    <div className="flex flex-col w-full h-full py-20">
      <div className=" px-20 ">
        <h1 className="text-white menu text-[3rem] ">
          Vault -{" "}
          <span className="text-[2rem] text-yellow-300">
            Good Bye Papershands
          </span>
        </h1>
        <p className="text-white">
          The idea is to block the nft swept for a desired time, and from that
          time get rewards in SOL not in any bullshit token. <br></br> The
          potential rewards are:
          <ul>
            <li>1 week 1/8 SOL as the pucharsed NFT.</li>
            <li>2 week 3/8 SOL as the pucharsed NFT.</li>
            <li>1 month 8/8 SOL as the pucharsed NFT.</li>
          </ul>
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full px-20 mt-10 flex md:flex-row gap-10 ">
          <div className="border-2 p-10  rounded-lg w-full">
            <h1 className="text-white menu text-[2rem]">UnLocked</h1>
            <div className=" h-3/4 grid grid-cols-5  ">
              {data.map((a) => (
                <div className="mx-auto hover:border-2 border-2 hover:border-tesmo2 hover:bg-tesmo2 border-tesmo p-2 rounded-lg">
                  <img
                    className="w-[100px] object-contain mx-auto rounded-lg"
                    src={a.image}
                    alt="nft"
                  />
                  <p className="text-white text-center text-[0.9rem] mt-2">
                    {a.nft}
                  </p>
                  <p className="text-center text-yellow-300 font-bold ">
                    {a.price} SOL
                  </p>
                  {/*             <Countdown className="text-white " date={Date.now() + 604800000} />
                   */}{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 p-10  rounded-lg w-full">
            <h1 className="text-white menu text-[2rem]">Locked</h1>
            <div className=" h-3/4 grid grid-cols-5  ">
              {stake.map((a) => (
                <div className="mx-auto hover:border-2 border-2 hover:border-tesmo2 hover:bg-tesmo2 border-tesmo p-2 rounded-lg">
                  <img
                    className="w-[100px] object-contain mx-auto rounded-lg"
                    src={a.image}
                    alt="nft"
                  />
                  <p className="text-white text-center text-[0.9rem] mt-2">
                    {a.nft}
                  </p>
                  <p className="text-center text-yellow-300 font-bold ">
                    {a.price} SOL
                  </p>
                  <Countdown
                    className="text-white "
                    date={Date.now() + 604800000}
                  />
                </div>
              ))}
            </div>
          </div>

          {/*  <div className="w-full h-[60vh] text-white justify-center flex items-center flex-col text-[1.6rem] md:text-[2rem] menu">
          <p>The raffle will be held in</p>
          <Countdown date={Date.now() + 80000000} />
          <div className="mt-20 text-center">
            <p className="text-white font text-[1rem]">
              Prize: 1 Thesmophoria nft
            </p>
            <p className="text-white font text-[1rem]">
              Only to <span className="font-bold">delisted</span> holders.
            </p>
            <p className="text-white font text-[1rem] underline">
              Snapshot at any time
            </p>
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
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Vaults;
