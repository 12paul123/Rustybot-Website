import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar({
    page
}) {
    console.log(page)
    if (page == "home") {
        return (
            <div class="navbar navbar-expand-md bg-d navbar-dark fixed-top py-3">
                <div class="container">
                    <a href="" class="navbar-brand text-danger mb-0 h1">Rusty Bot</a>
        
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#features">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#invite">Statistics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#questions">Ask Me</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/commands' className="nav-link">Commands</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/tutorial' className="nav-link">Tutorial</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=739031493313167421&permissions=1099780418560&scope=bot">
                            <button type="button" class="btn btn-outline-danger">Invite</button>
                        </a>
                    </form>
                </div>
            </div>
        )
    } else if (page == "commands") {
        return (
            <div class="navbar navbar-expand-md bg-d navbar-dark fixed-top py-3">
                <div class="container">
                    <a href="#" class="navbar-brand text-danger mb-0 h1">Rusty Bot</a>
        
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/tutorial' className="nav-link">Tutorial</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=739031493313167421&permissions=1099780418560&scope=bot">
                            <button type="button" class="btn btn-outline-danger">Login</button>
                        </a>
                    </form>
                </div>
            </div>
        )
    } else if (page == "privacy" || page == "terms") {
        return (
            <div class="navbar navbar-expand-md bg-d navbar-dark fixed-top py-3">
                <div class="container">
                    <a href="" class="navbar-brand text-danger mb-0 h1">Rusty Bot</a>
        
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to='/' class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/commands' className="nav-link">Commands</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/tutorial' className="nav-link">Tutorial</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=739031493313167421&permissions=1099780418560&scope=bot">
                            <button type="button" class="btn btn-outline-danger">Login</button>
                        </a>
                    </form>
                </div>
            </div>
        )
    } else if (page == "tutorial") {
        return (
            <div class="navbar navbar-expand-md bg-d navbar-dark fixed-top py-3">
                <div class="container">
                    <a href="" class="navbar-brand text-danger mb-0 h1">Rusty Bot</a>
        
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                                <Link to='/' class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/commands' className="nav-link">Commands</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=739031493313167421&permissions=1099780418560&scope=bot">
                            <button type="button" class="btn btn-outline-danger">Login</button>
                        </a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Navbar