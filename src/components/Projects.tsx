import { useEffect, useState } from "react";
import RepositoryList from "./RepositoryList";

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const reposOfGitHubProfile = "https://api.github.com/users/kpeti515/repos";
    fetch(reposOfGitHubProfile)
      .then((response) => response.json())
      .then((repositories) => {
        setRepos(repositories);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <RepositoryList repositories={repos} />
  );
};

export default Projects;
