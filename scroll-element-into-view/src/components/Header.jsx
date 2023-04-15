import "./Header.css";

export default function Header({
  expertiseSectionRef,
  blogSectionRef,
  contactSectionRef,
}) {
  function handleMenuItemClick(e, ref) {
    e.preventDefault();
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <span className="logo">Logo.</span>
      <nav>
        <ul>
          <li>
            <a
              href="#expertise"
              onClick={(e) => handleMenuItemClick(e, expertiseSectionRef)}
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={(e) => handleMenuItemClick(e, blogSectionRef)}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleMenuItemClick(e, contactSectionRef)}
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
