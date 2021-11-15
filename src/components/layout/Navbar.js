import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a href="" className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>
                            The React Pokemon
                             <i className='fab fa-typo3 px-2' />
                            </a>
                          <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Pokemon List <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <StyledLink to={`mypokemon`}>
                                <a className="nav-link" href="#">My Pokemon</a>
                                </StyledLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
