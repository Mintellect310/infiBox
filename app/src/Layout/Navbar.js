import React from 'react'
import './Toolbar.css';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">infiBox</div>
            <div>
                <ul className="toolbar_navigation-items">
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Signup</a></li>
                    
                    <li><a href="/">Logout</a></li>
                </ul>
                
            </div>
        </nav>
    
    </header>

);

export default Navbar;