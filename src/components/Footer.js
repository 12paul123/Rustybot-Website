import React from 'react'
import { Link } from 'react-router-dom'
import QuickAccess from './QuickAccess'

function Footer({
  page
}) {
  return (
    <footer class="bg-danger text-white pt-5 px-5 pb-1 position-relative">
        <div class="container">
          <div class="d-flex flex-md-row flex-column justify-content-between my-1 g-4">
            <QuickAccess page={page}></QuickAccess>
            <div class="d-flex flex-column align mb-4">
              <h5>Links</h5>
              <div><a class="text-d" href="https://top.gg/bot/739031493313167421">Top.gg</a></div>
              <div><a class="text-d" href="https://github.com/12paul123">Github</a></div>
              <div><a class="text-d" href="https://discord.com/api/oauth2/authorize?client_id=739031493313167421&permissions=1099780418560&scope=bot">Invite</a></div>
            </div>
            <div class="d-flex flex-column align mb-4">
              <h5>About</h5>
              <Link to='/commands' className="text-d">Commands</Link>
              <Link to='/terms' className="text-d">Terms Of Service</Link>
              <Link to='/privacy' className="text-d">Privacy Policy</Link>
            </div>
            <div class="d-flex flex-column align">
              <h5>Follow Us</h5>
              <div><a class="text-d" href="https://discord.gg/ykpkhF8aJk">First Corps</a></div>
            </div>
          </div>
        </div>
        <div class="text-center bg-da p-1">
          <p class="lead text-white">Copyright &copy; 2023 Rusty Bot</p>
        </div>
    </footer>
  )
}

export default Footer