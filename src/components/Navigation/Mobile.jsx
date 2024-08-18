import Image from "next/image";
import React, { useState } from "react";
import MenuItems from "@/data/Menu.json";
import { useRouter } from "next/router";

const Mobile = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-between items-center mx-2">
        <Image
          src={"/images/logos/logo.png"}
          width={50}
          height={50}
          className="rounded-lg object-contain"
        />
      <h1
        className="flex flex-col min-w-5 gap-y-1"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
        <div className="font-bold text-3xl fixed top-5 right-6">X</div>
        ) : (
          <>
            <div className="border-2 border-black"></div>
            <div className="border-2 border-black"></div>
            <div className="border-2 border-black"></div>
          </>
        )}
      </h1>

      <div
        className={`fixed bg-slate-300 h-screen w-5/6 top-0 transition-all ease-in-out duration-500 border-r border-gray-400 ${
          showMenu ? `left-0` : `-left-full`
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-y-6">
          {MenuItems?.map((item, index) => {
            return <div className="font-semibold text-4xl cursor-pointer select-none" onClick={() => {
              setShowMenu(!showMenu);
              router.push(item?.url);
            }}>{item?.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
