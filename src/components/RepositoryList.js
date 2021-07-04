import Repository from "./Repository"

const RepositoryList = ({ repositories }) => {

  return repositories
    .filter(repository => repository.fork === false && repository.description !== null)
    .map((repository) => {
      return <Repository key={repository.id} repository={repository} />
    })
}

export default RepositoryList