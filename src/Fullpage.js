import React, { useRef } from "react";
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
  const state = useLocation();

  const [pantalla, setPantalla] = React.useState("");
  React.useEffect(() => {
   
  }, [number, pantalla, state]);



  const capref = useRef(null);
  const catref = useRef(null);
  const ctoref = useRef(null);

  const handleClick = () => {
    catref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickCatalogo = () => {
    ctoref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickContacto = () => {
    capref.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div ref={ctoref} className="text-tesmo bg-tesmo">
         <Header handleClick={handleClick} handleClickCatalogo={handleClickCatalogo} handleClickContacto={handleClickContacto}/>
         <Headercel handleClick={handleClick} handleClickCatalogo={handleClickCatalogo} handleClickContacto={handleClickContacto}/>
          <div className="w-full h-full bg-tesmo  items-center px-4 md:p-20 flex flex-col md:flex-row justify-between ">
            <div   className=" w-full items-center h-full  ">
              <div   className="flex flex-col text-center mt-20 md:mt-0 justify-between items-center font text-white ">
                <div>
                  <h1 className=" text-white menu md:text-[3rem] text-[2rem] ">
                    Vision
                  </h1>
                  <p className="  text-[1.2rem]">
                    Create innovative and entertaining advancements that will
                    empower creators and communities in the Solana Ecosystem by
                    enhancing productivity, improving efficiency, and enabling
                    new possibilities for onboarding users.{" "}
                  </p>
                </div>
                <div>
                  <h1 className=" text-white menu md:text-[3rem] text-[2rem]  ">
                    Mision
                  </h1>
                  <p className="  text-[1.2rem]">
                    Build a community-centric web3 innovation and technology hub
                    with cutting-edge developments on the Solana blockchain.
                  </p>
                </div>
                <div>
                  <h1 className=" text-white menu md:text-[3rem] text-[2rem]  ">
                    Values
                  </h1>
                  <p className=" text-[1.2rem]">
                    Fostering a respectful community with inclusivity for women
                    in web3 
                    Preventing rugs and assisting drugs <br></br>
                    Innovation and originality <br></br>
                    Fun and responsible degeneracy <br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="  w-full">
              <div className="grid p-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4 ">
                <img
                  src='https://img-cdn.magiceden.dev/rs:fit:640:640:0:0/plain/https%3A%2F%2Farweave.net%2F_K8TcgU9K_EKj2t3Ww_VsV9vb82RATk_WUaMP-kRHB0%3Fext%3Dpng'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Farweave.net%2FiK7xyDyS7lWkcs0ZB_-bg7AvIlsx64CHJ6rv0jKsmgw%3Fext%3Dpng'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Farweave.net%2FT92WJYqFdyx9jpG4O_793OVWqx2m14Qls3b5_8HCavI%3Fext%3Dpng'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Farweave.net%2FEYHtRRZc4oOdHfAA_n8xCHHjNJsHwhn7rfIyqvkyydg%3Fext%3Dpng'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://datamancer.io/thesmophoria/img/2721.jpeg'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://datamancer.io/thesmophoria/img/5225.jpeg'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://datamancer.io/thesmophoria/img/721.jpeg'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://datamancer.io/thesmophoria/img/1253.jpeg'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://ord-mirror.magiceden.dev/content/5e0f1513fe2813b6e710ff4fc284b4213e7cd6aff25fdc32d148cf87ce65609ai0'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://ord-mirror.magiceden.dev/content/82d65806d87a536c21b9f9466de86d5f4022050d31a14a27cb1d552493d3cbbdi0'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://pbs.twimg.com/media/F0Y3jWVWwAE2-dT?format=png&name=900x900'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://pbs.twimg.com/media/F0DMCWfWYAI98-c?format=jpg&name=large'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://pbs.twimg.com/media/FzUNWnWWwAYD-h6?format=jpg&name=large'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://pbs.twimg.com/media/FzJ6TNBXwAUvWqx?format=jpg&name=large'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://pbs.twimg.com/media/F0s-wkKWIAIHqE4?format=jpg&name=large'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                <img
                  src='https://pbs.twimg.com/media/F0w4IJTaQAAXKbP?format=jpg&name=large'
                  className=" h-full w-full object-contain md:w-full md:p-0  mx-auto  rounded-lg"
                  alt="nft"
                />
                
              </div>
            </div>
          </div>
     
          <div className="w-full h-full bg-tesmo p-10 md:p-20 text-[3rem] menu">
            <h1 ref={catref} className="text-white text-left">Our History</h1>
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
      
          <div className="w-full bg-tesmo  p-4 md:p-20 md:text-center  menu">
            <h1   ref={capref} className="text-[3rem] text-white menu text-center md:text-left">
              Team
            </h1>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 w-full">
              <Member
                photo="https://1282852380-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFXCuVmC5ZyaAz6jl01Vx%2Fuploads%2FUCswVowPODxQy57u5dV3%2FUsman_2.png?alt=media&token=c6f02681-c9e4-4b4c-9c04-ea168221d11b"
                name="Robotventures.sol"
                user="@R0botventures"
                discord="RobotVentures.sol#3030"
                details="Business Analyst - Tech Nerd"
                role="CORE TEAM"

                /*                 curiosity="I love cats & I am here since Dec, 2021."
                 */
              />
              <Member
                photo="https://1282852380-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFXCuVmC5ZyaAz6jl01Vx%2Fuploads%2FPw2FUi3VtB9xLyyuEvQJ%2Fflow.png?alt=media&token=51778e77-2b41-41ea-a6fc-2b6510b828ec"
                name="FlowStateJ"
                user="@TheLibertyLiz"
                discord="@CrypticJonny"
                details="Web3 Business Owner / Consultant of 6 Years."
                role="CORE TEAM"

                /*                 curiosity="I like cats & I am here since Dec, 2021."
                 */
              />

              <Member
                photo="https://1282852380-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFXCuVmC5ZyaAz6jl01Vx%2Fuploads%2Fn4cOAW1gzFeezedbK6AI%2FDylan.png?alt=media&token=9e253401-5365-4bbc-aef9-0dc99bc35167"
                name="Dylan"
                user="@nfa_caller"
                discord="rkz#4276"
                details="Solana Enthusiast"
                curiosity="I like cats & I am here since Dec, 2021."
                role="CORE TEAM"
              />

              <Member
                photo="https://pbs.twimg.com/profile_images/1671676439207313410/9Poirey-_400x400.jpg"
                name="rkz"
                user="@RGFREESTYLE"
                discord="rkz#4276"
                details="Fullstack React Developer"
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
                photo="https://img-cdn.magiceden.dev/rs:fit:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FMR4sEvfg7pyIViwq2uoputVILUPHr9BK7pMG3PC05cg%3Fext%3Dpng"
                name="Kingpaperhands"
                user="@kingpaperhands"
                discord="rkz#4276"
                details="Rug radar"
                curiosity="I like cats & I am here since Dec, 2021."
                role="ADVISOR"
              />
            </div>
          </div>
    </div>
  );
};

export default Fullpage;
