import Repository from "./Repository";

const RepositoryList = ({ repositories }: { repositories: any }) => {
  return repositories
    .filter(
      (repository: any) =>
        repository.fork === false && repository.description !== null
    )
    .map((repository: any) => {
      return <Repository key={repository.id} repository={repository} />;
    });
};

export default RepositoryList;
