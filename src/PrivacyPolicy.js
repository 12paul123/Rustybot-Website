import React from 'react'

function PrivacyPolicy() {
  return (
    <div class="container p-font bg-dark text-white">
      <h3>Privacy Policy (Discord Bot)</h3>
      <p class="text-s">This privacy policy applies to the Rusty Bot Discord bot (the "bot") and explains how the bot collects, uses, and shares personal information from its users. By using the bot, you agree to the collection, use, and sharing of your personal information as described in this privacy policy.</p>
      
      <h3>Collection of Personal Information</h3>
      <p class="text-s">The bot collects the following types of personal information from its users:</p>
      <ul>
        <li class="text-s">Discord User IDs: The bot collects Discord User IDs in order to identify and interact with users within the Discord server.</li>
        <li class="text-s">Guild IDs: The bot collects Guild IDs in order to identify the Discord server on which the bot is used and to allow for server specific configurations.</li>
        <li class="text-s">Channel IDs: The bot collects Channel IDs in order to identify the specific channels within the Discord server on which the bot is used.</li>
        <li class="text-s">Message IDs: The bot collects Message IDs in order to identify and interact with specific messages within the Discord server.</li>
        <li class="text-s">Role IDs: The bot collects Role IDs in order to identify and interact with specific roles within the Discord server.</li>
        <li class="text-s">Steam64 IDs: The bot collects Steam64 IDs in order to access data from the Steam platform and to facilitate the use of certain bot features that interact with Steam.</li>
      </ul>
      <p class="text-s">All of this personal information is stored in a MySQL database owned and operated by the bot's creator.</p>
      
      <h3>Use of Personal Information</h3>
      <p class="text-s">The bot uses personal information for the following purposes:</p>
      <ul>
        <li class="text-s">To provide and improve the bot's features and functionality.</li>
        <li class="text-s">To personalize the user's experience and to facilitate communication within the Discord server.</li>
        <li class="text-s">To send news, rust server wipes, or other communications to servers who have opted in to receive them.</li>
        <li class="text-s">To provide features such as a global economy and other personalized experiences.</li>
      </ul>

      <h3>Rust Server List Feature</h3>
      <p class="text-s">The bot provides a feature that allows users to access information about rust servers. This information is collected by web scraping rust server lists. The collected information may include the server name, server reset date,, and other details. The bot uses this information to provide the feature.</p>

      <h3>News Feature</h3>
      <p class="text-s">The bot provides a news feature that allows server owners to configure the news that is delivered to their servers. The available news source can be sent to a specified channel, customized by the server owner. The bot makes reasonable efforts to ensure the accuracy and reliability of the news, but cannot guarantee the completeness or correctness of all news items.</p>
    
      <h3>Sharing of Personal Information</h3>
      <p class="text-s">The bot does not share personal information with third parties, except in the following cases:</p>
      <ul>
        <li class="text-s">With the user's consent: The bot may share personal information with third parties if the user has given their explicit consent.</li>
        <li class="text-s">For legal reasons: The bot may share personal information if required to do so by law, or if it believes in good faith that such action is necessary to protect the rights, property, or safety of the bot, its users, or the public.</li>
      </ul>

      <h3>Security of Personal Information</h3>
      <p class="text-s">The bot takes reasonable measures to protect the security of personal information and to prevent unauthorized access, use, or disclosure. Steam IDs are encrypted using AES encryption and other personal information is stored in a MySQL database with secure servers and protection against SQL injection. We take necessary steps to ensure the security of user data and notify them of any data breaches.</p>

      <h3>User Choices</h3>
      <p class="text-s">Users can delete their personal information from the bot's database at any time by using the command '!deldata'. This command will remove all personal information associated with the user's Discord account, including Discord User IDs, Guild IDs, Role IDs, and Steam64 IDs. Users can also contact the bot's creator to request the deletion of their personal information. However, users are not able to update their personal information directly.</p>
      <p class="text-s">In addition, when a user leaves all the servers in which the bot is present, their personal information will be automatically deleted from the bot's database. This ensures that the user's data is not retained by the bot if they are no longer interacting with it.</p>

      <h3>Third-Party Services</h3>
      <p class="text-s">The bot uses the following third-party services, which may collect and use personal information in their own ways:</p>
      <ul>
        <li class="text-s">Steam API: The bot uses the Steam API to access data about Rust players, including their statistics and achievements. The bot also uses the Steam API to collect news about the game Rust. This data is used to provide features and functionality within the bot, including the delivery of news to servers that have opted in to receive it. By using the bot and providing your Steam64 ID, you consent to the collection and use of this data as described in this privacy policy. The Steam Web API is governed by the <a href=''>Steam Web API Terms of Use</a> and <a href='https://store.steampowered.com/privacy_agreement/'>Steam Privacy Policy</a>.</li>
        <li class="text-s">Battlemetrics API: The bot uses the Battlemetrics API to collect data about rust servers. The specific data collected and the purpose for which it is used will vary depending on the features and functionality of the bot. By using the bot, you consent to the collection and use of this data as described in this privacy policy. The Battlemetrics API is governed by the <a href='https://www.battlemetrics.com/terms'>Battlemetrics Terms of Service</a> and <a href='https://www.battlemetrics.com/privacy_policy'>Battlemetrics Privacy Policy</a>.</li>
        <li class="text-s">Discord API: The bot uses the Discord API to access and interact with the Discord platform. The Discord API is governed by the <a href="https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service">Discord API Terms of Service</a> and <a href="https://discord.com/developers/docs/policies-and-agreements/developer-policy">Discord Privacy Policy</a>.</li>
      </ul>

      <h3>Changes to This Privacy Policy</h3>
      <p class="text-s">This privacy policy may be updated from time to time to reflect changes to the bot's practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page and the effective date will be noted at the top of the policy.</p>

      <h3>Contact Information</h3>
      <p class="text-s">If you have any questions or concerns about this privacy policy or the bot's handling of personal information, please contact the bot's creator at <a class="text-decoration-none" href="mailto:paul.schmidt@rustybot.xyz">paul.schmidt@rustybot.xyz</a>.</p>

      <h5>Effective Date: 2023-01-05</h5>
   </div>
  )
}

export default PrivacyPolicy