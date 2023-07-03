"use client"

import Link from "next/link"
import DarkModeToggle from "./DarkModeToggle"
import { signOut, useSession } from "next-auth/react"


const Navbar = () => {
  const session=useSession();
  return (
    <div className="hidden h-[100px] lg:flex justify-between items-center">
        <Link className="text-[22px] font-bold" href="/">Bonney</Link>
            <div className="flex items-center gap-[20px]">
                <DarkModeToggle/>
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/dashboard">Dashboard</Link>
                {session.status === "authenticated" && (<button className="p-[5px] bg-[hsl(173,77%,45%)] text-white cursor-pointer rounded-[3px]" onClick={signOut}>
                  Logout
                </button>)}
            </div>    
    </div>
  )
}

export default Navbar