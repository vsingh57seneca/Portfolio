import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import emailjs from 'emailjs-com'
import toast from "react-hot-toast";

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .send(
      "service_fgxb868", // Replace with your service ID
      "template_lwzdx6b", // Replace with your template ID

      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "CNRR3AWNmfTdKqX9P" // Replace with your user ID
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Message sent successfully")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        console.error("Failed to send email.", error);
        toast.error("Failed to send message")
      }
    );
  };

  return (
    <div className="p-4 md:p-16 flex flex-col gap-y-12">
          <h1 className="font-bold text-4xl">Contact Me</h1>
      <p className="">
        Send me a message if you wish you reach out and get in contact with me!
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 p-2 md:p-6 border-4 border-gray-100"
      >
        <label className="col-span-2 md:col-span-1">
          <h2>First Name</h2>
          <input
            className="p-1 border-2 rounded w-full md:w-fit"
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
        </label>
        <label className="col-span-2 md:col-span-1">
          <h2>Last Name</h2>
          <input
            className="p-1 border-2 rounded w-full md:w-fit"
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </label>
        <label className="col-span-2">
          <h2>Email</h2>
          <input
            className="p-1 border-2 rounded w-full"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        <label className="col-span-2 md:col-span-1">
          <h2>Phone</h2>
          <input
            className="p-1 border-2 rounded w-full md:w-fit"
            type="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </label>
        <label className="col-span-2">
          <h2>Message</h2>
          <textarea
            className="p-1 border-2 rounded w-full resize-none"
            type="text"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </label>
        <div className="col-span-2 flex justify-center">
          <button className="col-span-2 w-full md:w-1/2 lg:w-1/3 border px-2 py-1 bg-green-400 text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
