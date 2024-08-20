import React, { useEffect, useState } from "react";
import Projects from "@/data/Projects.json";
import ProjectView from "@/components/Project/ProjectView";

const AndieView = () => {
  const [project, setProject] = useState({});

  const fetchProject = async (name) => {
    const result = await Projects.find((obj) => obj?.name == name);
    setProject(result);
  };

  useEffect(() => {
    fetchProject("Andie");
  }, []);

  return <ProjectView project={project} />;
};

export default AndieView;
