import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { faBars,faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navigation.scss'

export default class Navigation extends Component {
    render() {
        return (
            <div id="menuContainer">
                <div className="menu" id="menuButton">
                <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
                <ul>
                    <li>
                    <Link to="home">
                    <FontAwesomeIcon icon={faHome} size="lg" />
                    </Link>
                    </li>
                    <li>
                    <Link to="shopping"><FontAwesomeIcon icon={faShoppingCart} size="lg" /></Link>
                    </li>
                    
                   
                    
                </ul>
              
            </div>
        )
    }
}
