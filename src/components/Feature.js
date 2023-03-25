import React from 'react'

function Feature({
  title,
  description,
  logo=""
}) {
  return (
  <div class="col-md">
      <div class="card bg-danger text-light py-1">
        <div class="card-body text-center">
            <h1>
                <i class={`bi ${logo} mb-3`}></i>
            </h1>
            <h3 class="card-title mb-3">
                {title}
            </h3>
            <p class="card-text">
                {description}
            </p>
            <a href="#" class="btn btn-secondary bg-dark">Read More</a>
        </div>
    </div>
  </div>
  )
}

export default Feature