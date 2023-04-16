import "./Header.css";

export default function Header({ onNavItemClick }) {
  function handleNavItemClick(e, itemId) {
    e.preventDefault();
    onNavItemClick(itemId);
  }

  return (
    <header>
      <span className="logo">Logo.</span>
      <nav>
        <ul>
          <li>
            <a
              href="#expertise"
              onClick={(e) => handleNavItemClick(e, "expertise")}
            >
              Expertise
            </a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => handleNavItemClick(e, "blog")}>
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavItemClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href="resume" className="resume-link">
        Resume
      </a>
    </header>
  );
}
