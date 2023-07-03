import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="p-[20px] cursor-pointer bg-[#53c28b] w-max text-white rounded-[5px]">{text}</button>
    </Link>
  );
};

export default Button;

