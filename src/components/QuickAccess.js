import React from 'react'
import { Link } from 'react-router-dom';

function QuickAccess({
    page
}) {
    if (page == "home") {
        return (
        <div class="d-flex flex-column align mb-4">
            <h5>Quick Access</h5>
            <div><a class="text-d" href="#features">Features</a></div>
            <div><a class="text-d" href="#invite">Statistics</a></div>
            <div><a class="text-d" href="#questions">Ask Me</a></div>
        </div>
        )
    } else if (page == "commands") {
        return (
        <div class="d-flex flex-column align mb-4">
            <h5>Quick Access</h5>
            <Link to='/' className="text-d">Home</Link>
            <Link to='/terms' className="text-d">Terms Of Service</Link>
            <Link to='/privacy' className="text-d">Privacy Policy</Link>
        </div>
        )
    }
}

export default QuickAccess;