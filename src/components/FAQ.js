import React from 'react'
import Question from './Question'

function FAQ() {
  return (
    <section class="p-5 bg-dark text-light" id="questions">
        <div class="container">
          <h2 class="text-center mb-4 bg-dark">
            Frequently Asked Questions
          </h2>
          <Question
            title="How do use setup news/wipe channels?"/>
          <Question
            title="How do you earn scrap?"/>
          <Question
            title="How do you farm?"/>
        </div>
    </section>
  )
}

export default FAQ