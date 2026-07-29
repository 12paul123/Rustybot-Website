import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PrivacyPolicy from '../PrivacyPolicy'

function Privacy() {
  return (
    <div class="bg-dark">
      <Navbar page="privacy"></Navbar>
      <PrivacyPolicy/>
      <Footer></Footer>
    </div>
  )
}

export default Privacy