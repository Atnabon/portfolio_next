"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard= () => {

  
  const session = useSession();

  const router = useRouter();
  
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex gap-[100px]">
        <div className="flex flex-1">
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className="flex items-center justify-between mx-[50px] my-[0px]" key={post._id}>
                  <div className="w-[200px] h-[100px] ">
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className="">{post.title}</h2>
                  <span
                    className="cursor-pointer text-red"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="flex flex-1 flex-col gap-[20px]" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className="p-[10px] bg-transparent rounded-[3px] text-[#bbb] text-[20px] font-bold " />
          <input type="text" placeholder="Desc" className="p-[10px] bg-transparent rounded-[3px] text-[#bbb] text-[20px] font-bold "  />
          <input type="text" placeholder="Image" className="p-[10px] bg-transparent rounded-[3px] text-[#bbb] text-[20px] font-bold "  />
          <textarea
            placeholder="Content"
            className="p-[10px] bg-transparent rounded-[3px] text-[#bbb] text-[20px] font-bold " 
            cols="30"
            rows="10"
          ></textarea>
          <button className="p-[20px] cursor-pointer bg-[#53c28b] rounded-[5px] text-[#eee] font-bold">Send</button>
        </form>
      </div>
    );
  }
};


export default Dashboard;