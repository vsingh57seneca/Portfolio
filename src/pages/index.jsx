import Image from "next/image";
import workExperience from "@/data/WorkExperience.json";
import skills from "@/data/Skills.json";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-2 p-4 gap-y-8 gap-x-4 md:p-12 md:mb-20">
        <div className="col-span-full md:col-span-1 flex flex-col gap-y-8">
          <Image
            src={"/images/me/me.png"}
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-5xl font-medium">Hello! I'm Victor Singh</h1>
        </div>

        <div className="col-span-full md:col-span-1 flex flex-col gap-y-8">
          <h1 className="text-3xl font-medium">
            An aspiring Fullstack Developer born and raised in Toronto.
          </h1>
          <p className="font-bold text-sm text-gray-500">
            Passionate about creating responsive and meaningful applications.
          </p>
          <div className="flex gap-x-6">
            <button className="px-3 py-2 rounded-md bg-neutral-700 hover:bg-neutral-900 text-white transition-all ease-in-out">
              Contact me
            </button>
            <button className="px-3 py-2 rounded-md border border-gray-400 hover:bg-gray-300 transition-all ease-in-out">
              Preview my projects
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-12 gap-x-4 p-6 md:p-12 bg-gradient-to-b from-white from-10% via-slate-300 to-slate-300 to-90%">
        <div className="col-span-full">
          <h1 className="text-3xl font-medium mb-8">Technical Overview</h1>
          <div className="flex flex-col gap-y-8">
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-full md:col-span-1 border min-h-96 p-4 rounded-lg text-xl font-semibold mb-4 shadow-lg shadow-slate-400 border-none">
                <h1 className="text-2xl">Languages</h1>
                <div className="flex flex-col gap-y-4 p-4">
                  {skills?.technical_skills?.languages?.map(
                    (language, index) => {
                      return (
                        <>
                          <div className="flex items-center gap-x-6">
                            <Image
                              src={language?.image}
                              height={40}
                              width={40}
                              className="object-contain rounded-lg"
                            />
                            <p>{language?.name}</p>
                          </div>
                          {index < skills?.technical_skills?.languages?.length - 1 && (
                            <hr className="border-gray-700/30" />
                          )}
                        </>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="col-span-full md:col-span-1 border min-h-96 p-4 rounded-lg text-xl font-semibold mb-4 shadow-lg shadow-slate-400 border-none">
                <h1 className="text-2xl">Frameworks</h1>
                <div className="flex flex-col gap-y-4 p-4">
                  {skills?.technical_skills?.frameworks?.map(
                    (framework, index) => {
                      return (
                        <>
                          <div className="flex items-center gap-x-6">
                            <Image
                              src={framework?.image}
                              height={40}
                              width={40}
                              className="object-contain rounded-lg"
                            />
                            <p>{framework?.name}</p>
                          </div>
                          {index < skills?.technical_skills?.frameworks?.length - 1 && (
                            <hr className="border-gray-700/30" />
                          )}
                        </>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="col-span-full md:col-span-1 border min-h-96 p-4 rounded-lg text-xl font-semibold mb-4 shadow-lg shadow-slate-400 border-none">
                <h1 className="text-2xl">Libraries</h1>
                <div className="flex flex-col gap-y-4 p-4">
                  {skills?.technical_skills?.libraries?.map(
                    (library, index) => {
                      return (
                        <>
                          <div className="flex items-center gap-x-6">
                            <Image
                              src={library?.image}
                              height={40}
                              width={40}
                              className="object-contain rounded-lg"
                            />
                            <p>{library?.name}</p>
                          </div>
                          {index < skills?.technical_skills?.libraries?.length - 1 && (
                            <hr className="border-gray-700/30" />
                          )}
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-12 gap-x-4 mt-10 p-6 md:p-12">
        <div className="col-span-full md:col-span-1">
          <h1 className="text-3xl font-medium mb-8">Work Experience</h1>
          <div className="flex flex-col gap-y-8">
            {workExperience?.reverse()?.map((job, index) => {
              return (
                <>
                  <div className="flex items-center justify-start">
                    <Image
                      src={job?.logo}
                      height={40}
                      width={40}
                      className="object-contain"
                    />
                    <div className="flex flex-col ml-6">
                      <p>
                        {job?.title} at{" "}
                        <span className="font-bold">{job?.employer}</span>
                      </p>
                      <p className="text-sm text-gray-500 font-semibold">
                        {job?.start_date} - {job?.end_date}
                      </p>
                    </div>
                  </div>
                  {index < workExperience?.length - 1 && (
                    <hr className="border-gray-700" />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="col-span-full md:col-span-1">
          <h1 className="text-3xl font-medium mb-8">Skills</h1>
          <div className="flex flex-col gap-y-8">
            {skills?.soft_skills?.map((skill, index) => {
              return (
                <>
                  <div className="flex items-center justify-start">
                    <div className="flex items-center gap-x-6">
                      <Image
                        src={skill?.image}
                        height={40}
                        width={40}
                        className="object-contain"
                      />
                      <p className="">{skill?.name}</p>
                    </div>
                  </div>
                  {index < skills?.soft_skills?.length - 1 && (
                    <hr className="border-gray-700 mt-1" />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
