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
                Thesmophoria was an artistic project that suffered a rug pull by its founder, causing the community to lose everything. <br></br> The community refused to let the project die. In just 48 hours, they raised 160 sol in donations to remint the project.<br></br> Now the floor price is higher than the all time high before the rug pull, with rare NFTs selling for over 30+ $SOL. <br></br>Now, the new Thesmophoria team is working hard to build the project back up stronger than ever, with a new website and roadmap for the future.<br></br> Join the Thesmophoria movement and be a part of something special.<br></br> Visit our Discord to learn more and connect with our passionate and knowledgeable <span className="font-bold">community.</span> 
                </p>
              </div>
            </div>
            <div className=" w-full">
              <img
                src={tesmo}
                className=" h-full w-full object-contain p-4 md:w-3/4 md:p-0  mx-auto  rounded-lg"
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
                photo="https://pbs.twimg.com/profile_images/1622283245055352833/HoiXbPP5_400x400.jpg"
                name="Robotventures.sol"
                user="@R0botventures"
                discord="RobotVentures.sol#3030"
                details="Business Analyst - Tech Nerd"
                role="CORE TEAM"

                /*                 curiosity="I love cats & I am here since Dec, 2021."
                 */
              />
               <Member
                photo="https://pbs.twimg.com/profile_images/1626663414129983488/AO7EdOjz_400x400.jpg"
                name="FlowStateJ"
                user="@TheLibertyLiz"
                discord="@CrypticJonny"
                details="Web3 Business Owner / Consultant of 6 Years."
                role="CORE TEAM"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
              
               <Member
                photo="https://pbs.twimg.com/profile_images/1624568312775467009/u_rdIkmW_400x400.jpg"
                name="Dylan"
                user="@nfa_caller"
                discord="rkz#4276"
                details="Solana Enthusiast"
                curiosity="I like cats & I am here since Dec, 2021."
                role="CORE TEAM"
              />
              
              <Member
                photo="https://pbs.twimg.com/profile_images/1622467149942910976/cMeW5lXm_400x400.jpg"
                name="rkz"
                user="@RGFREESTYLE"
                discord="rkz#4276"
                details="Fullstack React Developer"
                role="DEVELOPER"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
           
              <Member
                photo="https://pbs.twimg.com/profile_images/1603352592205189120/hnDr5lUH_400x400.jpg"
                name="Crypto Flan"
                user="@crypto_flan"
                discord="rkz#4276"
                details="Web and App Security Analyst, Dev, Derugging."
                role="DEVELOPER"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
              
          
           
          <Member
                photo="https://pbs.twimg.com/profile_images/1611101650818682889/HKEw896L_400x400.png"
                name="ApocalypsevSol"
                user="@RGFREESTYLE"
                discord="rkz#4276"
                details="DevOps Engineer"
                role="DEVELOPER"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />
             
              <Member
                photo="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FhNSXmqma4Wj0jG2XxRtSmn_HOLdmiLrg4EHQ27RaBRk%3Fext%3Dpng"
                name="Gajoo"
                user="@Gajoo_sol"
                discord="rkz#4276"
                details="Solana Enthusiast"
                curiosity="I like cats & I am here since Dec, 2021."
                role="DISCORD MANAGER"
              />
                 <Member
                photo="https://pbs.twimg.com/profile_images/1570404982146351104/snVQhnBi_400x400.jpg"
                name="Kingpaperhands"
                user="@kingpaperhands"
                discord="rkz#4276"
                details="Rug radar"
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
