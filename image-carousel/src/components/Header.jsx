import reactLogo from '../assets/react.svg'

export default function Header() {
  return (
    <header>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Image Carousel</h1>
      <h2>A React Practice</h2>
    </header>
  )
}
