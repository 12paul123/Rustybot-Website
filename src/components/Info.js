import React from 'react'

function Info() {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start mt-5" id="info">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1><span class="text-danger">Rusty</span> Bot</h1>
                    <p class="lead my-4">
                        Rusty is a bot based on rust with
                        tons of features to assist you in the game. It has
                        a fully featured scrap economy with mini games
                        and moderation tools.
                    </p>
                    <button type="button" class="btn btn-danger btn-lg">Invite Rusty Bot</button>
                </div>
                <img class="img-fluid w-50 d-none d-sm-block" src="bot.svg" alt=""></img>
            </div>
        </div>
    </section>
  )
}

export default Info