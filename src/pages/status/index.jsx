import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Projects from "@/data/Projects.json";
import axios from "axios";

export async function getServerSideProps() {
  const statuses = await Promise.all(
    Projects.filter((project) => project?.url?.includes("victorsingh")).map(
      async (project) => {
        try {
          const start = Date.now();
          const response = await axios.get(project.url);
          const responseTime = Date.now() - start;
          return {
            url: project.url,
            displayName: project.displayName,
            status: response.status,
            responseTime,
          };
        } catch (error) {
          return {
            url: project.url,
            displayName: project.displayName,
            status: error.response?.status || 500,
            error: error.message,
          };
        }
      }
    )
  );

  return {
    props: {
      statuses,
    },
  };
}

const StatusPage = ({ statuses }) => {
  return (
    <div className="p-4 md:p-16 flex flex-col gap-y-12">
      {statuses ? (
        <>
          <h1 className="font-bold text-4xl">App Status</h1>
          <div className="grid grid-cols-2 gap-y-4 lg:mx-20">
            {statuses &&
              statuses?.map((status, index) => (
                <div
                  key={index}
                  className="col-span-full border p-4 rounded shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h1 className="text-2xl font-semibold">
                        {status.displayName}
                      </h1>
                      <div>
                        {status.responseTime && (
                          <p>Response Time: {status.responseTime}ms</p>
                        )}
                        {status.error && <p>Error: {status.error}</p>}
                      </div>
                    </div>
                    <p className="text-2xl">{status.status === 200 ? <FaCheckCircle className="text-green-600" /> : <FaTimesCircle className="text-red-600" />}</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default StatusPage;
