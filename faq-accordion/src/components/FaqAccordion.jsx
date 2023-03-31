import { useState } from 'react'

import '../styles/Accordion.css'

function AccordionHeader({ title }) {
  return (
    <p>
      <b>{title}</b>
    </p>
  )
}

function AccordionBody({ content }) {
  return <div>{content}</div>
}

export default function FaqAccordion({ questions, openByDefault }) {
  const [isOpen, setIsOpen] = useState(openByDefault)

  const toggleItem = (id) => {
    if (isOpen === id) {
      setIsOpen(null)
      return
    }
    setIsOpen(id)
  }

  return (
    <section className="accordion">
      <h3>Frequently Asked Questions</h3>
      {questions.map((question) => (
        <div key={question.id} className="accordion-item">
          <div className="accordion-header">
            <AccordionHeader title={question.title} />
            <div>
              <button onClick={() => toggleItem(question.id)}>
                {isOpen === question.id ? '-' : '+'}
              </button>
            </div>
          </div>
          <div
            className={`accordion-body${
              isOpen === question.id ? '' : ' hidden'
            }`}
          >
            <AccordionBody content={question.info} />
          </div>
        </div>
      ))}
    </section>
  )
}
