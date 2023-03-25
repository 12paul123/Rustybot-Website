import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchData from '../components/SearchData'

function Commands() {
  return (
    <div>
      <Navbar page="commands"></Navbar>
      <div class="bg-d text-light p-5 mt-5">
          <div clas="container h-100">
              <div class="row justify-content-md-center">
                  <div class="col-md-10 px-4">
                      <h4>Rusty Bot Commands</h4>
                      <p class="text-secondary">
                          Find all the Rusty Bot commands here.
                      </p>
                      <hr></hr>
                  </div>
                  <SearchData></SearchData>
              </div>
          </div>
      </div>
      <Footer page="commands"></Footer>
    </div>
    )
}

export default Commands