import RepositoryInfo from './RepositoryInfo';

const RepositoryList = ({ repositories }: { repositories: any }) => {
  return repositories
    .filter((repository: any) => repository.fork === false && repository.description !== null)
    .map((repository: any) => {
      return (
        <RepositoryInfo
          key={repository.id}
          repository={repository}
        />
      );
    });
};

export default RepositoryList;
