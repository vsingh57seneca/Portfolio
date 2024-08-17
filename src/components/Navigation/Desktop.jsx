import React from 'react'
import Image from "next/image";
import MenuItems from "@/data/Menu.json";
import { useRouter } from "next/router";

const Desktop = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mx-12">
        <Image
          src={"/images/logos/logo.png"}
          width={50}
          height={50}
          className="rounded-lg object-contain"
        />

        <div className="flex gap-x-6 items-center">
          {MenuItems?.map((item, index) => {
            return (
              <>
                <div className={`font-semibold text-xl cursor-pointer select-none text-neutral-600 hover:text-neutral-950 ${window.location.pathname === item?.url && `bg-gray-200 py-1 px-2 rounded-lg`}`} onClick={() => router.push(item?.url)}>{item?.name}</div>
              </>
            )
          })}
        </div>
    </div>
  )
}

export default Desktop