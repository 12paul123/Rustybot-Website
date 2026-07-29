import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Tutorial() {
  return (
    <div class="bg-dark">
        <Navbar page="tutorial"/>
        <div class="container bg-dark text-white p-font">
          <h3>How to setup applications? (Optional)</h3>
          <p>You can use the following commands to set up a system for accepting and processing applications on your Discord server:</p>

          <ol>
            <li>Make sure you have administrator privileges.</li>
            <li>Use the !init command to create the necessary roles (Verified, Unverified, New, and Moderator).</li>
            <li>Use the !setapplications command to specify the channel where you want to receive applications. You can specify the channel by its ID or name.</li>
            <li>Use the !setrules command to set the message that contains your guild's rules, and add a reactable emoji for users to acknowledge the rules.</li>
            <li>Inform your users about the !apply command in a separate text channel. To submit an application, users can either message the bot directly or type the !apply command in the designated channel. The application will then be sent to the specified channel.</li>
          </ol>

          <h3>How to setup news & wipe channels? (Optional)</h3>
          <p>You can use the following commands to set up channels for Rust server wipe announcements and news:</p>

          <ol>
            <li>Use the !setwipes command to specify the channel where you want to receive Rust server wipe announcements.</li>
            <li>Use the !setnews command to specify the channel where you want to receive Rust news.</li>
            <li>Provide the channel ID or the name of the channel when using these commands.</li>
            <li>To find the channel ID, go to settings, enable developer mode under advanced options, right-click on the desired channel, and select 'Copy ID.'</li>
          </ol>
        </div>
        <Footer page="tutorial"/>
    </div>
  )
}

export default Tutorial