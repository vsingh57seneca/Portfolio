import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Contact = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="p-4 md:p-12 bg-gradient-to-b from-white from-10% to-slate-300 to-20% md:h-[calc(100vh-136px)] h-[calc(100vh-96px)]">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="md:col-span-1 hidden md:flex">
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-4xl font-semibold">
              Feel free to reach out with any questions or comments regarding
              the website or job opportunities!
            </h1>
            <p className="text-2xl">
              Below you can click to view my LinkedIn profile as well as reach out to me
              via discord, email or text
            </p>
            <div className="relative">
              <Image
                src={"/images/backgrounds/contact-background.png"}
                width={50}
                height={100}
              />
              <div className="absolute top-0 left-14 h-full">
                <div className="flex flex-col h-full justify-around">
                    <p className="font-bold text-gray-500">647-448-9431</p>
                    <p className="font-bold text-gray-500">victor_mo@live.com</p>
                    <p className="font-bold text-gray-500">zremedy</p>
                    <Link href={'https://www.linkedin.com/in/victor-r-singh/'} target="_blank" className="font-bold underline text-blue-800">Victor Singh</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-1">
          <h1 className="uppercase text-2xl font-bold mb-8">Get in touch</h1>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-y-1 col-span-1">
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="border border-black py-2 px-2"
              />
            </div>
            <div className="flex flex-col gap-y-1 col-span-1 ">
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-black py-2 px-2"
              />
            </div>
            <div className="flex flex-col gap-y-1 col-span-full ">
              <label className="font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="border border-black py-2 px-2"
              />
            </div>
            <div className="flex flex-col gap-y-1 col-span-full ">
              <label className="font-semibold">Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                className="border border-black py-2 px-2"
              />
            </div>
            <div className="flex flex-col gap-y-1 col-span-full ">
              <label className="font-semibold">Message</label>
              <textarea
                className="border border-black p-2"
                rows={4}
                placeholder="Enter message here..."
              />
            </div>

            <button className="col-span-full bg-green-500 hover:bg-green-800 text-white font-bold py-3 transition-all ease-in-out duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
