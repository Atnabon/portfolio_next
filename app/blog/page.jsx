import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex items-center gap-[50px] mb-[50px]">
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className="flex items-center gap-[50px] mb-[50px]" key={item.id}>
          <div className="object-cover">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className="mb-[10px]">{item.title}</h1>
            <p className="text-[18px] text-[#999]">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
