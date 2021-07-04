import { useEffect, useState } from "react"

const Repository = ({ repository }) => {

  const [repoInfo, setRepoInfo] = useState([])
  useEffect(() => {
    fetch(repository.url)
      .then(response => response.json())
      .then(data => setRepoInfo(data))
  }, [repository.url])

  return (
    <>
      <h2>{repository.name}</h2>
      <p>Repository link: {repoInfo.html_url}</p>
      <p>Description: {repoInfo.description}</p>
      <p>Created at: {repoInfo.created_at}</p>
      <p>Last push: {repoInfo.pushed_at}</p>
    </>
  )
}

export default Repository