import React, { useState } from 'react'
import Accordion from "./Accordion";
import { accordionData } from "./data";

function SearchData() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("")

    const isItems = (value) => {
        console.log(value.category)
        if (value.heading.toLowerCase().includes(query)) {
            if (value.category == category) {
                return true
            } else if (category == "") {
                return true
            }
        }
    }

  return (
    <div class="row justify-content-md-center">
        <div class="col-md-4 px-4 bg-color fit-content">
            <h4 class="p-3">Select commands</h4>
            <hr class="p-1"></hr>
            <div>
                <button onClick={() => setCategory("")} class="command-button p-2 m-2 text-secondary">All</button>
            </div>
            <div>
                <button onClick={() => setCategory("Admin")} class="command-button p-2 m-2 text-secondary">Admin</button>
            </div>
            <div>
                <button onClick={() => setCategory("Moderation")} class="command-button p-2 m-2 text-secondary">Moderation</button>
            </div>
            <div>
                <button onClick={() => setCategory("Gambling")} class="command-button p-2 m-2 text-secondary">Gambling</button>
            </div>
            <div>
                <button onClick={() => setCategory("Rust")} class="command-button p-2 m-2 text-secondary">Rust</button>
            </div>
        </div>
        <div class="col-md-6 px-4">
            <form>
                <input placeholder="Search" onChange={e => setQuery(e.target.value)} class="form-control bg-dark text-light mb-4 mt-4 mt-md-0"></input>
            </form>
            {accordionData.filter(isItems)
                    .map(({ heading, description, content, category }) => (
                <Accordion heading={heading}
                    description={description}
                    content={content}
                    category={category}
                    key={accordionData.heading}/>
            ))}
        </div>
    </div>
  )
}

export default SearchData