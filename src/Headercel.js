import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import logo from "./assets/logo.jpg";
import me from "./assets/me.png";
import { useNavigate } from "react-router-dom";

const Headercel = ({handleClick, handleClickCatalogo,  handleClickContacto }) => {
  const [menu, setMenu] = React.useState("Vision");
  const [scroll, setY] = React.useState(window.scrollY);
  const [open, setOpen] = React.useState(false);
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
   setOpen(false)
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
  const Navegador = () => {
    return (
      <div className="h-[100vh] fixed top-0 z-[100] w-full bg-tesmo items-center flex  justify-center">
        <AiOutlineClose
          onClick={() => setOpen(false)}
          className="text-white  fixed top-10 right-10 text-[1.8rem]"
        />
        <ul className="menu flex flex-col gap-4 text-center text-pike2 cursor-pointer text-[1.8rem]">
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
        <div className=" flex gap-4 items-center justify-center cursor-pointer bottom-20 fixed">
          <a href="https://magiceden.io/marketplace/tesmophoria">
            <img className="w-8 h-8 object-contain" src={me} alt="me" />
          </a>
          <a href="https://twitter.com/thesmophoria_">
            <AiOutlineTwitter className="text-[30px] text-white  hover:text-sky-500" />
          </a>
          <a href="https://discord.com/invite/tesmophoria">
            <FaDiscord className="text-[30px] text-white hover:text-purple-500" />
          </a>
        </div>
      </div>
    );
  };

  const scroller = (props) => {
    if (props[0] === "Vision") {
      navigate("/", { state: 1 });
    }
    if (props[0] === "Raffle") {
      navigate("/raffle", { state: 0 });
    }
    if (props[0] === "Our History") {
      navigate("/", { state: 2 });
    }
    if (props[0] === "Team") {
      navigate("/", { state: 5.95 });
    }
    if (props[0] === "Roadmap") {
      navigate("/", { state: 10 });
    }
    if (props[0] === "Earn") {
   
      window.location.href = "https://earn.thesmophoria.io/";
    }

  
    setMenu(props[0]);
    setOpen(false)
  };

  return (
    <div>
      {open && <Navegador />}
      <nav
        className={`${
          scroll > 10
            ? "top-0  border-b-4 border-pike fixed "
            : "top-0 absolute "
        } : w-full z-[80] justify-between bg-tesmo items-center px-4 h-20 transition-all ease-in 2s md:hidden flex`}
      >
        <img src={logo} alt="logo" className="w-24 p-4 rounded-full" />
        <AiOutlineMenu
          onClick={() => setOpen(true)}
          className="text-white text-[30px] cursor-po
      "
        />
      </nav>
    </div>
  );
};

export default Headercel;
