"use client"

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className="w-[42px] h-[24px] flex justify-between items-center p-[2px] relative cursor-pointer rounded-[30px] " onClick={toggle}>
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className="w-[15px] height-[15px] bg-[#53c28b] rounded-[50%] absolute" style={mode === "light" ? {left:"2px" }: {right:"2px"}}
      />

    </div>
  );
};

export default DarkModeToggle;
