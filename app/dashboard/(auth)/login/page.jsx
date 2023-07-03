"use client";

import React, { useEffect, useState } from "react";
import { getProviders,signIn,useSession} from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";


const Login = ({ url }) => {
  const session= useSession();

  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };



  return (
      <div className="flex items-center flex-col gap-[20px]">
      <h1 className="text-[#bbb]">{success ? success : "Welcome Back"}</h1>
      <h2 className="text-[20px] mb-[30px] text-[#bbb]">Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-[20px]">
        <input
          type="text"
          placeholder="Email"
          required
          className="p-[20px] bg-transparent rounded-[5px] outline-none text-[#bbb] text-[20px] font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-[20px] bg-transparent rounded-[5px] outline-none text-[#bbb] text-[20px] font-bold"
        />
        <button className="w-[300px] p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold">Login</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="w-[300px] p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold"
      >
        Login with Google
      </button>
      <span className="text-[#bbb]">- OR -</span>
      <Link className="" href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
