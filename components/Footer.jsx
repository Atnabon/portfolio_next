import Image from "next/image"


const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between">
        <div>@2023 Bonney. All rights reserved.</div>
        <div className="flex items-center gap-[10px]">
          <Image src="/1.png" alt="bonney dev" width={15} height={15} className="cursor-pointer opacity-1" />
          <Image src="/2.png" alt="bonney dev" width={15} height={15} className="cursor-pointer opacity-1" />
          <Image src="/3.png" alt="bonney dev" width={15} height={15} className="cursor-pointer opacity-1" />
          <Image src="/4.png" alt="bonney dev" width={15} height={15} className="cursor-pointer opacity-1" />
        </div>
    </div>
  )
}

export default Footer