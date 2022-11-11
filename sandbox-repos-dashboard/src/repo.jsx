export default function Repo({ name, description, repoLink }) {
  return (
    <div className="repo-content">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={repoLink}>See more...</a>
    </div>
  )
}
