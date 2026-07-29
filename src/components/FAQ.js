import React from 'react'
import AccordionQuestion from './AccordionQuestion'

function FAQ() {
  return (
    <section class="p-5 bg-dark text-light" id="questions">
        <div class="container">
          <h2 class="text-center mb-4 bg-dark">
            Frequently Asked Questions
          </h2>
          <AccordionQuestion
            title="How do use setup news/wipe channels?"/>
          <AccordionQuestion
            title="How do you earn scrap?"/>
          <AccordionQuestion
            title="How do you farm?"/>
        </div>
    </section>
  )
}

export default FAQ