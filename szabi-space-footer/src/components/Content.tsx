export default function Content() {
  return (
    <main>
      {Array(14)
        .fill(0)
        .map(() => (
          <p>Some content will display here but not enough to fill the page.</p>
        ))}
    </main>
  )
}
