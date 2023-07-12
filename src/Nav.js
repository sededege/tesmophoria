import React from 'react'

const nav = () => {
    const [menu, setMenu] = React.useState("Vision");

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
    
  ];

  const scroller = (props) => {
    if (props[1] === 2){
      setNumber(3)
  
    } else if (props[1] === 3){
      setNumber(4)
    }
    else {
      setNumber(props[1])
    }
    setMenu(props[0])
  }
  
  return (
    <nav className="gap-4 mr-6 w-full text-white">
    <ul className="menu flex flex-col gap-4 text-right text-pike2 cursor-pointer text-[1.3rem]">
      {menunav.map((a,index) => (
        <li key={index}
          onClick={() => scroller([a.name, index])}  
          className={`${
            menu === a.name ? "text-yellow-400" : "text-white"
          } `}
        >
          {a.name}
   
        </li>
      ))}
    </ul>
   
  </nav>
  )
}

export default nav