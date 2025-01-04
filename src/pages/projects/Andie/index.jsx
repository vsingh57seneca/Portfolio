import React from "react";
import ProjectView from "@/components/Project/ProjectView";
import useProject from "@/hooks/useProject";

const AndieView = () => {
  const {project} = useProject({name: "Andie"});
  return <ProjectView project={project} />;
};

export default AndieView;
