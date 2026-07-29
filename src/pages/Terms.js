import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TermsOfService from '../TermsOfService'

function Terms() {
  return (
    <div class="bg-dark">
      <Navbar page="terms"></Navbar>
      <TermsOfService/>
      <Footer></Footer>
    </div>
  )
}

export default Terms