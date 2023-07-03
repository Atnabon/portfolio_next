import Image from 'next/image'
import Link from 'next/link'
import Hero from "public/hero.jpg"

export default function Home() {
return (

<div className="sm:flex-col lg:flex-row flex items-center gap-[100px] ">
  <div className="flex flex-1 flex-col gap-[50px]">
    <h1 className="text-[52px] bg-gradient-to-b-[#194c33,#bbb]"> Hey, I&apos;m Atnabon 👋 A Software Developer. </h1> 
    <p className="text-[24px] font-normal">
    Tech enthusiast with experience in building robust and scalable applications using React, Node.js, and Next.js frameworks.
    </p> 
    <Link href="/portfolio">
      <button className="p-[20px] cursor-pointer bg-[#53c28b] rounded -[5px] text-white w-max">See My Works</button> 
    </Link> 
  </div>  
      <div className="flex flex-1 flex-col gap-[50px]"> 
      <Image src={Hero} alt="hero" className="object-cover h-80 w-80 rounded-full" /> 
      </div> 
</div> 
) }