import { useState } from 'react';
import { useFetchGithubInfo } from './hooks/useFetchGithubInfo';
import { Loader } from './Loader';
import RepositoryList from './RepositoryList';

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const reposOfGitHubProfile = 'https://api.github.com/users/kpeti515/repos';
  const { response, error } = useFetchGithubInfo(reposOfGitHubProfile, setIsLoading);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return !isLoading && response ? <RepositoryList repositories={response} /> : <Loader />;
};

export default Projects;
