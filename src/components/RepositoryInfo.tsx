import { useState } from 'react';
import { useFetchGithubInfo } from './hooks/useFetchGithubInfo';

const RepositoryInfo = ({ repository }: { repository: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { response, error } = useFetchGithubInfo(repository.url, setIsLoading);
  if (error) {
    return <p>There was some error during fetch, please try again later</p>;
  }

  return !isLoading && response ? (
    <>
      <h2>{repository.name}</h2>
      <p>Repository link: {response.html_url}</p>
      <p>Description: {response.description}</p>
      <p>Created at: {response.created_at}</p>
      <p>Last push: {response.pushed_at}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default RepositoryInfo;
