import React from "react";
import ProjectView from "@/components/Project/ProjectView";
import useProject from "@/hooks/useProject";

const KeebGramView = () => {
  const {project} = useProject({name: "Keebgram"});
  return (
    <ProjectView project={project} />
  );
};

export default KeebGramView;
