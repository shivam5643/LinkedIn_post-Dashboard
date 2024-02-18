import React from "react";
import Chart from "./Chart";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full bg-[#FFE3D8]   ">
      
      <div className='flex items-center justify-between'>
      <h1 className="text-3xl font-montserrat font-bold text-black-500 ">DASHBOARD</h1>
    <div className='px-4 py-4 bg-red-500 rounded-[10px] leading-5 max-w-[200px] mx-[100px]'>
     <Link to="post">
     <button className='text-white text-xl cursor-pointer font-semibold rounded-[10px]'>Generate Post</button>
    </Link>
    </div>
    </div>

      <div className="flex space-x-8 py-6">
        <div className="flex  border-[red] flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2 className="font-semibold font-montserrat">Yatharth Verma</h2>
          <li className="text-gray-500 mt-3 font-palanquin">No of Post: 5</li>
        </div>
        <div className="flex border-[red] flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2 className="font-semibold font-montserrat">Yatharth Verma</h2>
          <li className="text-gray-500 mt-3 font-palanquin">No of Post: 10</li>
        </div>
      </div>
      <div className="flex  space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Post Per Month
            <Chart />
        </div>
      </div>
      <div className="flex space-x-8 py-6">
        <div className="flex border-[red] flex-col rounded-md border  w-[400px] h-[200px] p-8 justify-center">
          <h2 className="font-semibold font-montserrat">Your Activity</h2>
          <li className="text-gray-500 mt-3 font-palanquin"> 10 Post Per Month</li>
        </div>
        <div className="flex  border-[red] flex-col rounded-md border w-[400px] h-[200px] p-8 justify-center">
          <h2 className="font-semibold font-montserrat">Pending Post</h2>
          <li className="text-gray-500 mt-3 font-palanquin"> Pending Post: 8</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;