import React from 'react'

function Invite() {
  return (
    <section class="bg-dark p-5 mt-2" id="invite">
        <div class="container text-center p-4">
            <div class="row g-4">

                <div class="col-md text-light">
                    <i class="bi bi-hdd-rack fs-2"></i>
                    <div class="fs-4 mb-1">
                        Server Count
                    </div>
                    <div class="fs-4">
                        100
                    </div>
                </div>

                <div class="col-md text-light">
                    <div class="fs-1 mb-3">
                        Join us now!
                    </div>
                    <button type="button" class=" btn custom-button btn-danger">Invite</button>
                </div>

                <div class="col-md text-light">
                    <i class="bi bi-people-fill fs-2"></i>
                    <div class="fs-4 mb-1">
                        Users
                    </div>
                    <div class="fs-4">
                        100
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Invite