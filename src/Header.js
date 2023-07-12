import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import logo from "./assets/logo.jpg";
import me from "./assets/me.png";
import { useNavigate } from "react-router-dom";

const Header = ({handleClick, handleClickCatalogo,  handleClickContacto }) => {
  const [menu, setMenu] = React.useState("Vision");
  const [scroll, setY] = React.useState(window.scrollY);
  const navigate = useNavigate();
  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [scroll]
  );

  React.useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const menunav = [
    {
      id: 0,
      name: "Vision",
    },
    {
      id: 1,
      name: "Our History",
    },
    {
      id: 3,
      name: "Team",
    },
    {
      id: 4,
      name: "Vault",
    },
    {
      id: 5,
      name: "Ordinals",
    },
    /* {
      id: 2,
      name: "Roadmap",
    }, */
    /* {
      id: 5,
      name: "Raffle",
    }, */
  ];

  

  const navegar = (a) => {
   setMenu(a)
    if (a === "Home") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } 
    if (a === 'Vision') {
      handleClickCatalogo()
        } 
    if (a === 'Our History') {
      handleClick()
    } 
    if (a === 'Team') {
      handleClickContacto() 
       } 
    if (a === 'Vault') {
      window.location.href = "https://earn.thesmophoria.io/";

       } 
    if (a === 'Ordinals') {
      window.location.href = "https://ordinals.thesmophoria.io/";

       } 
  };

  return (
    <nav
      className={`${
        scroll > 10 ? "top-0 fixed " : "top-0 absolute "
      } : w-full hidden md:flex z-[100] justify-between bg-tesmo bg-opacity-85 items-center px-20 h-20 transition-all ease-in 2s`}
    >
      {/*       <img src={logo} alt="logo" className="flex w-20" />
       */}{" "}
      {/* <p
        className="font-bold text-[1.5rem] text-white cursor-pointer"
      >
        PIKE STORE
      </p> */}
     
      <img
        src={logo}
        alt="logo"
        className="w-24 p-2"
      />
      <div className="flex gap-4 mr-6">
        <ul className="menu flex gap-4 text-right text-pike2 cursor-pointer text-[1.3rem]">
          {menunav.map((a, index) => (
            <li
              key={index}
              onClick={() => navegar(a.name)}
              className={`${
                menu === a.name ? "text-yellow-400" : "text-white"
              } 
              ${
                a.name === 'Ordinals' && 'text-white px-2 rounded-lg bg-orange-500'
              }
              ${
                a.name === 'Vault' && 'text-white px-2 rounded-lg bg-purple-500'
              } `}
            >
              {a.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
