import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-header flex space-between align-center">
                    <div className="logo">
                        <Link to="/">ODUNSI</Link>
                    </div>
                    <div className="navigation">
                        <nav>
                            <Link to="/about">About</Link>
                            <Link to="/work">Work</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
