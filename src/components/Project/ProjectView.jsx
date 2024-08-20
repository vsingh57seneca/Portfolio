import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectView = ({project}) => {
    const router = useRouter();
  return (
<>
      {project && (
        <div className="grid grid-cols-2 p-4 gap-y-6">
          <div className="col-span-full">
            <Link href={`${project?.url}`} target="_blank">
              <div className="flex items-center w-full gap-x-2">
                <h1 className="text-4xl font-bold">{project?.name}</h1>
                <FaExternalLinkAlt size={25} className="mt-1" />
              </div>
            </Link>
          </div>
          <div className="col-span-full lg:col-span-1">
            <img
              src={project?.preview}
              className="border-2 border-black rounded-lg "
            />
            <div className="font-semibold">
              <p className="text-end">
                {project?.start_date} - {project?.end_date}
              </p>
              <p
                className={`text-end font-bold ${
                  project?.status === "Complete"
                    ? "text-green-400"
                    : project?.status === "On-going" ? "text-yellow-600" : "text-red-600"
                }`}
              >
                {project?.status}
              </p>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 flex flex-col px-4 gap-y-4">
            <h2 className="font-semibold text-2xl">Project Overview</h2>
            <p>{project?.description}</p>
            {project?.description2 && <p>{project?.description2}</p>}

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <h1 className="font-semibold">Platforms</h1>
                {project?.platforms?.map((platform, index) => {
                  return (
                    <>
                      <span>{platform}</span>
                      {index < project?.platforms?.length - 1 && (
                        <span>, </span>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="col-span-1">
                <h1 className="font-semibold">Languages</h1>
                {project?.languages?.map((language, index) => {
                  return (
                    <>
                      <span>{language}</span>
                      {index < project?.languages?.length - 1 && (
                        <span>, </span>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="col-span-1">
                <h1 className="font-semibold">Libraries</h1>
                {project?.libraries?.map((library, index) => {
                  return (
                    <>
                      <span>{library}</span>
                      {index < project?.libraries?.length - 1 && (
                        <span>, </span>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="col-span-1">
                <h1 className="font-semibold">Frameworks</h1>
                {project?.frameworks?.map((framework, index) => {
                  return (
                    <>
                      <span>{framework}</span>
                      {index < project?.frameworks?.length - 1 && (
                        <span>, </span>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="col-span-full flex items-center justify-end">
                <p>
                  <span
                    className="underline text-blue-500 font-semibold cursor-pointer"
                    onClick={() => router.push('/projects')}
                  >
                    Back to Projects
                  </span>
                  <span> | </span>
                  <span
                    className="underline text-blue-500 font-semibold cursor-pointer"
                    onClick={() => router.push("/")}
                  >
                    Home
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectView