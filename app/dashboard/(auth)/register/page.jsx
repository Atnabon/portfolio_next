"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-[20px] items-center justify-center">
      <h1 className="">Create an Account</h1>
      <h2 className="">Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-[20px] ">
        <input
          type="text"
          placeholder="Username"
          required
          className="p-[20px] bg-transparent text-[#bbb] rounded-[5px] text-[20px] font-bold"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className="p-[20px] bg-transparent text-[#bbb] rounded-[5px] text-[20px] font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-[20px] bg-transparent text-[#bbb] rounded-[5px] text-[20px] font-bold"
        />
        <button className="w-[300px] p-[20px] cursor-pointer bg-[#53c28b] rounded-[5px] text-[#eee] font-bold">Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className="">- OR -</span>
      <Link className="" href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
