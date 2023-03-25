import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar({
    page
}) {
    if (page == "home") {
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
                            <li class="nav-item">
                                <Link to='/terms' class="nav-link">Terms</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/privacy' class="nav-link">Privacy</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <button type="button" class="btn btn-outline-danger">Login</button>
                    </form>
                </div>
            </div>
        )
    } else if (page == "commands") {
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
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/terms' class="nav-link">Terms</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/privacy' class="nav-link">Privacy</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <button type="button" class="btn btn-outline-danger">Login</button>
                    </form>
                </div>
            </div>
        )
    } else if (page == "privacy") {
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
                            <li class="nav-item">
                                <Link to='/terms' class="nav-link">Terms</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <button type="button" class="btn btn-outline-danger">Login</button>
                    </form>
                </div>
            </div>
        )
    } else if (page == "terms") {
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
                            <li class="nav-item">
                                <Link to='/privacy' class="nav-link">Privacy</Link>
                            </li>
                        </ul>
                    </div>
        
                    <form class="form-inline">
                        <button type="button" class="btn btn-outline-danger">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Navbar