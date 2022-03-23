import React, { useEffect } from 'react';
import  { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

function Nav (props) {
    const {
        navItems = [],
        setCurrentNavItem,
        currentNavItem,
    } = props;

    useEffect(() => {
        document.title = (currentNavItem.name);
    }, [currentNavItem]);


    return (
        <section className='sticky-top'>
            <nav className='d-flex justify-end navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>Jake Smith</a>
                <ul className='navbar-nav'>
                    {navItems.map((navItem) => (
                        <li className={`nav-link ${ currentNavItem.name === navItem.name && 'active'}`} key={navItem.name} >
                            <Link className='nav-link'  to={`/${navItem.name}`} onClick={() => setCurrentNavItem(navItem)}>
                                {navItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Nav;