import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">StarWars DB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/people" className="nav-link" >People <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/planet" className="nav-link" >Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/starship" className="nav-link">Starships</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header;
