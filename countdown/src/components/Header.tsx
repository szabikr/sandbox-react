export interface HeaderProps {
  activeView: string
  setActiveView: (activeView: string) => void
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              className={activeView === 'Home' ? 'active' : ''}
              onClick={() => setActiveView('Home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeView === 'Settings' ? 'active' : ''}
              onClick={() => setActiveView('Settings')}
            >
              Settings
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
