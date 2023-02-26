import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import logo from "./assets/logo.jpg";
import me from "./assets/me.png";
import { useNavigate } from "react-router-dom";

const Header = ({ setNumber }) => {
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
      id: 2,
      name: "Roadmap",
    },
    /* {
      id: 5,
      name: "Raffle",
    }, */
  ];

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
      navigate("/", { state: 4.1 });
    }
    if (props[0] === "Roadmap") {
    navigate("/roadmap", { state: 0 });

    }

  
    setMenu(props[0]);
  };

  return (
    <nav
      className={`${
        scroll > 10 ? "top-0 fixed " : "top-0 absolute "
      } : w-full hidden md:flex z-[100] justify-between bg-tesmo items-center px-20 h-20 transition-all ease-in 2s`}
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
              onClick={() => scroller([a.name, index])}
              className={`${
                menu === a.name ? "text-yellow-400" : "text-white"
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
