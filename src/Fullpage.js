import React from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import tesmo from "./assets/tesmo.gif";
import { Tweet } from "react-twitter-widgets";
import Member from "./Member";
import Header from "./Header";

const Fullpage = () => {
  const ref = React.useRef();
  const parallax = React.useRef();
  const [number, setNumber] = React.useState("");

  React.useEffect(() => {
   ref.current.scrollTo(number);
    
  }, [number]);

  return (
    <div className="text-tesmo bg-tesmo">
      <Header setNumber={setNumber} />
      <Parallax ref={ref} pages={5}>
        <ParallaxLayer
          id="1"
          speed={0}
          offset={0}
          factor={1}
          className="bg-tesmo"
          /*   style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }} */
        >
          <div className="w-full h-full  bg-tesmo mt-20 p-20 text-center text-[3rem] flex justify-between menu">
            <div className=" w-full items-center ">
              <div className="flex  flex-col items-center mt-10 font-mono">
                <h1 className=" text-white menu">Vision</h1>
                <p className="text-white text-[1.4rem]">
                  Duis do ad elit mollit proident. Adipisicing ea dolor magna ad
                  laborum nisi. Amet fugiat exercitation elit esse cupidatat
                  incididunt velit.
                </p>
                <p className="text-white text-[1.4rem]">
                  Duis do ad elit mollit proident. Adipisicing ea dolor magna ad
                  laborum nisi. Amet fugiat exercitation elit esse cupidatat
                  incididunt velit.
                </p>
                <p className="text-white text-[1.4rem]">
                  Duis do ad elit mollit proident. Adipisicing ea dolor magna ad
                  laborum nisi. Amet fugiat exercitation elit esse cupidatat
                  incididunt velit.
                </p>
              </div>
            </div>
            <div className=" w-full">
              <img
                src={tesmo}
                className="w-3/4 mx-auto  rounded-lg"
                alt="nft"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          id="2"
          speed={0.8}
          offset={1}
          factor={2}
          className="bg-tesmo"
        >
          <div className="w-full h-full bg-tesmo p-20 text-[3rem] menu">
            <h1 className="text-white text-left">Our History</h1>
            <div className="grid grid-cols-3 gap-4">
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
          offset={3}
          factor={1}
          className="bg-tesmo"
          onClick={() => ref.current.scrollTo(3)}
          id="3"
        >
         
              <div className="w-full h-full p-20 text-left  menu">
                <h1 className="text-[3rem] text-white menu">Team</h1>
                <div className="grid grid-cols-4 gap-4 w-full">
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1622467149942910976/cMeW5lXm_400x400.jpg"
                    name="rkz"
                    user="@RGFREESTYLE"
                    discord="rkz#4276"
                    details="Fullstack React Developer."
                    role="CORE TEAM"

                    /*                 curiosity="I like cats & I am here since Dec, 2021."
                     */
                  />
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1622283245055352833/HoiXbPP5_400x400.jpg"
                    name="Robotventures.sol"
                    user="@R0botventures"
                    discord="RobotVentures.sol#3030"
                    details="Canadian - Business Analyst - Tech Nerd"
                    role="CORE TEAM"

                    /*                 curiosity="I love cats & I am here since Dec, 2021."
                     */
                  />
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1622554354661072899/psDUFrXA_400x400.jpg"
                    name="Ryan"
                    user="@Ryan_Mirror"
                    discord="rkz#4276"
                    details="MirrorWorld | Community Manager"
                    role="CORE TEAM"

                    /*                 curiosity="I like cats & I am here since Dec, 2021."
                     */
                  />
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1570404982146351104/snVQhnBi_400x400.jpg"
                    name="Kingpaperhands"
                    user="@kingpaperhands"
                    discord="rkz#4276"
                    details="Rug radar."
                    curiosity="I like cats & I am here since Dec, 2021."
                    role="CORE TEAM"
                  />
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1624568312775467009/u_rdIkmW_400x400.jpg"
                    name="Dylan"
                    user="@nfa_caller"
                    discord="rkz#4276"
                    details="Lorem lorem lorem"
                    curiosity="I like cats & I am here since Dec, 2021."
                    role="CORE TEAM"
                  />
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1624568312775467009/u_rdIkmW_400x400.jpg"
                    name="Gaajo"
                    user="@nfa_caller"
                    discord="rkz#4276"
                    details="Lorem lorem lorem"
                    curiosity="I like cats & I am here since Dec, 2021."
                    role="CORE TEAM"
                  />
                  <Member
                    photo="https://pbs.twimg.com/profile_images/1618243803185299461/SihrNd0w_400x400.jpg"
                    name="Solar Dex"
                    user="@solar_dex"
                    discord="rkz#4276"
                    details="Co-Founder and CEO of Solar Dex."
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
        <ParallaxLayer
          id="1"
          speed={0.6}
          offset={4}
          factor={1}
          className="bg-tesmo"
        >
          <div className="w-full h-full p-20 flex items-center justify-center  menu">
            <h1 className="text-[3rem] text-white menu">Cooming Soon</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Fullpage;
