import React from "react";
import ProjectsArray from "@/data/Projects.json";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter();
  return (
    <div className="p-4 md:p-16 flex flex-col gap-y-12">
      <h1 className="font-bold text-4xl">Projects</h1>
      <p className="font-bold text-gray-600">
        Here is a collection of projects I have worked on during my time in
        school and in my leisure.
      </p>
      <div className="grid grid-cols-3 gap-8">
        {ProjectsArray?.map((project, index) => {
          return (
            <>
              <div className="col-span-full lg:col-span-1 gap-y-2">
                <img
                  src={project?.preview}
                  className="rounded-lg border border-gray-400 cursor-pointer"
                  onClick={() => router.push(`projects/${project?.name}`)}
                />
                <div className="flex justify-between w-full items-center">
                  <h1 className="text-xl font-semibold">{project?.name}</h1>
                  <FaExternalLinkAlt className="cursor-pointer" onClick={() => router.push(`projects/${project?.name}`)} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
