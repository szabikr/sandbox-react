import "./Main.css";

export default function Main({
  expertiseSectionRef,
  blogSectionRef,
  contactSectionRef,
}) {
  return (
    <main>
      <section>
        <h1>Scroll Element into View</h1>
        <p>Click on the menu items to scroll to a section.</p>
      </section>
      <section id="expertise" ref={expertiseSectionRef}>
        <h1>Expertise</h1>
        <p>Experienced Software Egnineer.</p>
      </section>
      <section id="blog" ref={blogSectionRef}>
        <h1>Blog</h1>
        <p>Blog posts are coming soon...</p>
      </section>
      <section id="contact" ref={contactSectionRef}>
        <h1>Contact Me</h1>
        <p>Send me an e-mail and let's talk about the details.</p>
      </section>
    </main>
  );
}
