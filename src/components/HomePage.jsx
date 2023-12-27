import React from "react";
import yuvraj from "../assets/yuvraj.jpg";

const HomePage = () => {
  return (
    <div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Home Page
        </h2>
      </div>     
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col col-span-2 mt-8 text-xl font-semibold text-left items-center p-20 tracking-widest">
          <p>
          I'm a final year Computer Science Engineering student at Vellore Institute of Technology, where my journey in tech took flight. From learning the ropes of frontend development with React-JS to diving deep into the endless ocean of open source – I've touched every stone to ensure it's not unturned.
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src={yuvraj}
            alt="yuvraj"
            className="flex mt-8 h-80 w-80 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
