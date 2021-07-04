import { useEffect, useState } from "react"
import RepositoryList from "./RepositoryList"

const Projects = () => {

  const [repos, setRepos] = useState([])
  useEffect(() => {
    const reposOfGitHubProfile = 'https://api.github.com/users/kpeti515/repos'
    fetch(reposOfGitHubProfile)
      .then(response => response.json())
      .then(repositories => {
        setRepos(repositories)
      })
  }, [])

  return (
    <RepositoryList repositories={repos} />
  )
}

export default Projects