import React from "react";
import useProject from "@/hooks/useProject";
import ProjectView from "@/components/Project/ProjectView";

const KeebGramView = () => {
  const {project} = useProject({name: "PokemonDND"});
  return (
    <ProjectView project={project} />
  );
};

export default KeebGramView;
