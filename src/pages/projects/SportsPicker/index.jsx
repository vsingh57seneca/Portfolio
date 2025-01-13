import React from "react";
import useProject from "@/hooks/useProject";
import ProjectView from "@/components/Project/ProjectView";

const KeebGramView = () => {
  const {project} = useProject({name: "SportsPicker"});
  return (
    <ProjectView project={project} />
  );
};

export default KeebGramView;
