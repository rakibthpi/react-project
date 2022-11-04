import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';

const Menu = () => {
    return (
        <div className='menu_area py-3'>
            <div className='container mx-auto'>
                <div className='menu_text'>
                    <div className='logo_area'>
                        <Link to='/'><img src={logo} alt="images" /></Link>
                    </div>
                    <nav className='menu'>
                        <ul>
                            <li>
                                <NavLink to='/shops'>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/orderreview'>Order Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/inventory'>Inventory</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    );
};

export default Menu;