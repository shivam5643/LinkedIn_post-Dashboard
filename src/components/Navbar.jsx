import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';

import {

  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
    const lucideIconsArray = [
        {
            img:LayoutDashboard ,
            name: "Dashboard",
        },
        {
            img: Clock4Icon,
            name: "Generate Post",
        },
        {
            img: BarChart3Icon,
            name: "Analytics",
        },
        
        {
            img: ArrowLeftRightIcon,
            name: "Transactions",
        },
        {
            img: HelpCircleIcon,
            name: "Help Center",
        },
        
       
      ];
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeindex,setActiveIndex]=useState(0);
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10  flex flex-col border-2 border-[#1dc071] text-white relative bg-[#1c1c24] " +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className=" cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#1dc071] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>
      
      <div className="logo-div flex space-x-4 items-center">
        <img src={Logo} />
        <span className={`font-semibold text-lg font-serif    ${!isExpanded ? "hidden" : "block"}`}>Linkedin Post</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12 items-center justify-center ">
        <div className="nav-links w-full">
          <div className="flex flex-col space-x-3 w-full p-2 rounded gap-4 items-center justify-center ">
          {lucideIconsArray.map((item, index) => (
    <div
        key={index}
        className={`flex gap-3 items-center w-full p-2 rounded cursor-pointer ml-4 ${activeindex === index ? " bg-[#1dc071] text-white font-semibold" : ""}`}
        onClick={() => setActiveIndex(index)}
    >
        {item.name === "Dashboard" ? (
            <Link to="/" className={!isExpanded ? "hidden" : "block flex gap-2"}>
                <item.img />
                <span>{item.name}</span>
                 
            </Link>
        ): item.name === "Generate Post" ? (
          <Link to="/post" className={!isExpanded ? "hidden" : "block flex gap-2"}>
              <item.img />
              <span>{item.name}</span>
          </Link>
      ) : (
            <>
                <item.img />
                <span className={!isExpanded ? "hidden" : "block"}>{item.name}</span>
            </>
        )}
    </div>
))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;