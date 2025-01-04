import { useState, useEffect } from "react";
import Projects from "@/data/Projects.json";

const useProject = ({ name }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = () => {
      const result = Projects.find((obj) => obj?.name === name);
      setProject(result);
    };

    fetchProject();
  }, [name]);

  return { project, setProject };
};

export default useProject;
