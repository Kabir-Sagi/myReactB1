import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">My Company</a>
              <ul className="nav">
                  <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
                  <li className="nav-item"><Link to="/date" className="nav-link text-white">Date</Link></li>
                  <li className="nav-item"><Link to="/login" className="nav-link text-white">Login</Link></li>
                  <li className="nav-item"><Link to="/hoc" className="nav-link text-white">HOC</Link></li>
                 
                
              </ul>
            </nav>
        </div>
    }
}

export default Navbar