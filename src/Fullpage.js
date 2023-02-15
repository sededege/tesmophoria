import React from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import tesmo from "./assets/tesmo.gif";
import { Tweet } from "react-twitter-widgets";
import Member from "./Member";
import Header from "./Header";
import Headercel from "./Headercel";
import { useLocation } from "react-router-dom";

const Fullpage = () => {
  const ref = React.useRef();
  const parallax = React.useRef();
  const [number, setNumber] = React.useState("");
  const state = useLocation()

  const [pantalla, setPantalla] = React.useState("");
  React.useEffect(() => {
    ref.current.scrollTo(state.state-1);
    setPantalla(window.screen.width);
  }, [number, pantalla,state]);
  
  return (
    <div className="text-tesmo bg-tesmo">
      <Parallax ref={ref} pages={pantalla > 1024 ? 4 : 10.2}>
        <ParallaxLayer
          id="1"
          speed={0}
          offset={0}
          factor={pantalla > 1024 ? 1 : 1}
          className="bg-tesmo"
          /*   style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }} */
        >
          <div className="w-full h-full  bg-tesmo  px-4 md:p-20 text-center text-[3rem] flex flex-col md:flex-row justify-between menu">
            <div className=" w-full items-center  ">
              <div className="flex  flex-col items-center mt-20 font text-white text-[1.4rem] justify-between h-full md:h-[50vh]">
                <h1 className=" text-white menu md:text-[3rem] text-[2rem]  ">
                  Vision
                </h1>
                <p className=" mt-4 text-[1.2rem]">
                The rebirth of the Goddess has happened. From now on we will start building a project that will change the game of Solana.
                </p>
                <p className=" mt-4  text-[1.2rem] md:text-[1.2rem]">
                  Thanks to all to the heroes who saved{" "}
                  <span className="font-bold">+250,000 USD </span> from the
                  community.
                </p>
                <p className=" mt-4 text-[1.2rem]">
                  Thanks for trusting us,<br></br>
                  <span className="font-bold">We are Thesmophoria.</span>
                </p>
              </div>
            </div>
            <div className=" w-full">
              <img
                src={tesmo}
                className=" h-full w-full object-cover object-contain p-4 md:w-3/4 md:p-0  mx-auto  rounded-lg"
                alt="nft"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          id="2"
          speed={0.5}
          offset={ pantalla > 1024 ? 1 : 1.5}
          factor={ pantalla > 1024 ? 2 : 4}
          className="bg-tesmo"
          /*   sticky={{start:1, end: 2}} */
        >
          <div className="w-full h-full bg-tesmo p-10 md:p-20 text-[3rem] menu">
            <h1 className="text-white text-left">Our History</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 md:[&>*:nth-child(odd)]:mt-20">
              <div className="w-full">
                <Tweet
                  tweetId="1624606539620433920"
                  options={{ theme: "dark" }}
                />
              </div>
              {/*  <div className="w-full">
                <Tweet
                  tweetId="1623684472045436928"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1623403156091596800"
                  options={{ theme: "dark" }}
                />
              </div> */}
              <div className="w-full">
                <Tweet
                  tweetId="1624804770539085825"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624841242055004161"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624109741151485954"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624603322194829313"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624968821181231105"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624418109409972226"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624823798003294212"
                  options={{ theme: "dark" }}
                />
              </div>
              <div className="w-full">
                <Tweet
                  tweetId="1624580663855788032"
                  options={{ theme: "dark" }}
                />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          offset={ pantalla > 1024 ? 3.2 : 6}

          factor={pantalla > 1024 ? 0.5 : 8}
          className="bg-tesmo"
          onClick={() => ref.current.scrollTo(3)}
          id="3"
          
        >
          <div className="w-full bg-tesmo h-[1000vh] p-4 md:p-20 md:text-center  menu">
            <h1 className="text-[3rem] text-white menu text-center md:text-left">Team</h1>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 w-full">
              <Member
                photo="https://pbs.twimg.com/profile_images/1611101650818682889/HKEw896L_400x400.png"
                name="ApocalypsevSol"
                user="@RGFREESTYLE"
                discord="rkz#4276"
                details="DevOps Engineer"
                role="DEV LEADER"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1603352592205189120/hnDr5lUH_400x400.jpg"
                name="Crypto Flan"
                user="@crypto_flan"
                discord="rkz#4276"
                details="Web and App Security Analyst, Dev, Derugging."
                role="TECH LEADER"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1622467149942910976/cMeW5lXm_400x400.jpg"
                name="rkz"
                user="@RGFREESTYLE"
                discord="rkz#4276"
                details="Fullstack React Developer"
                role="DERUG LEADER"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1622283245055352833/HoiXbPP5_400x400.jpg"
                name="Robotventures.sol"
                user="@R0botventures"
                discord="RobotVentures.sol#3030"
                details="Business Analyst - Tech Nerd"
                role="DERUG LEADER"

                /*                 curiosity="I love cats & I am here since Dec, 2021."
                 */
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1622554354661072899/psDUFrXA_400x400.jpg"
                name="Ryan"
                user="@Ryan_Mirror"
                discord="rkz#4276"
                details="Community Manager"
                role="COMMUNITY DIRECTOR"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1570404982146351104/snVQhnBi_400x400.jpg"
                name="Kingpaperhands"
                user="@kingpaperhands"
                discord="rkz#4276"
                details="Rug radar"
                curiosity="I like cats & I am here since Dec, 2021."
                role="RUG ANALYST"
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1624568312775467009/u_rdIkmW_400x400.jpg"
                name="Dylan"
                user="@nfa_caller"
                discord="rkz#4276"
                details="Solana Enthusiast"
                curiosity="I like cats & I am here since Dec, 2021."
                role="COMMUNITY LEADER"
              />
              <Member
                photo="https://media.discordapp.net/attachments/1072978757448638555/1075102613957247028/https___arweave.png"
                name="Gajoo"
                user="@Gajoo_sol"
                discord="rkz#4276"
                details="Solana Enthusiast"
                curiosity="I like cats & I am here since Dec, 2021."
                role="DISCORD MANAGER"
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1618243803185299461/SihrNd0w_400x400.jpg"
                name="Solar Dex"
                user="@solar_dex"
                discord="rkz#4276"
                details="Co-Founder and CEO of Solar Dex"
                curiosity="I like cats & I am here since Dec, 2021."
                role="ADVISOR"
              />
              <Member
                photo="https://pbs.twimg.com/profile_images/1582951550028242946/bjWDnLc7_400x400.jpg"
                name="Dak Daze"
                user="@dak_daze"
                discord="rkz#4276"
                details="Lead With an Open Mind and an Open Heart"
                curiosity="I like cats & I am here since Dec, 2021."
                role="ADVISOR"
              />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Fullpage;
