import React from 'react'
import Feature from './Feature'
import "bootstrap-icons/font/bootstrap-icons.css";

function Panel() {
  return (
    <section class="p-5 my-1" id="features">
        <div class="container">
            <div class="row text-center g-4">
                <Feature
                title="Rust Info"
                description="
                Our bot give you access to information about smelting, crafting, recycling,
                raiding, gather rates & much more. With our calculators you can calculate
                anything you desire."
                logo="bi-robot"/>

                <Feature
                title="Rust Info"
                description="
                Our bot give you access to information about smelting, crafting, recycling,
                raiding, gather rates & much more. With our calculators you can calculate
                anything you desire."
                logo="bi-database-check"/>

                <Feature
                title="Rust Info"
                description="
                Our bot give you access to information about smelting, crafting, recycling,
                raiding, gather rates & much more. With our calculators you can calculate
                anything you desire."
                logo="bi-people"/>
            </div>
        </div>
    </section>
  )
}

export default Panel