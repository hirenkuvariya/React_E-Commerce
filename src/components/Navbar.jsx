import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TButton from './--shared/TButton';
import theme from '../theme/theme';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const [hovered, setHovered] = useState(null);

    const styles = {
        navLink: {
            color: theme.colors.text,
            fontWeight: '500',
            margin: '0 10px',
            textDecoration: 'none',
            transition: '0.3s',
        },
        navbarNav: {
            alignItems: "center",
        },
        activeLink: {
            color: theme.colors.purple,
            fontWeight: '600',
        },
        hoverLink: {
            color: theme.colors.purple,
        },
        brand: {
            color: theme.colors.purple,
            fontWeight: '700',
            fontSize: '24px',
            textDecoration: 'none',
            fontFamily: theme.fonts.heading,
        },
        button: {
            margin: theme.spacing.sm,
            borderColor: theme.colors.purple,
            color: theme.colors.purple,
            borderRadius: theme.borderRadius,
            backgroundColor: 'transparent',
        },
        searchContainer: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing.md,
        },
        searchIcon: {
            position: 'absolute',
            left: theme.spacing.sm,
            color: theme.colors.gray,
        },
        searchInput: {
            padding: `2px 12px 2px 30px`,
            border: `1px solid ${theme.colors.dark
                }`,
            borderRadius: theme.borderRadius,
            fontSize: '14px',
            outline: 'none',
            backgroundColor: theme.colors.light,
            color: theme.colors.text,
        },
    };

    const getLinkStyle = (path) => ({
        ...styles.navLink,
        ...(hovered === path && styles.hoverLink),
    });

    const getLinkClass = ({ isActive, to }) =>
        isActive ? { ...getLinkStyle(to), ...styles.activeLink } : getLinkStyle(to);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink to="/" style={styles.brand}>Pal Computer</NavLink>

                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* Nav Links */}
                    <ul className="navbar-nav m-auto my-2 text-center" style={styles.navbarNav}>
                        <li className="nav-item">
                            <div style={styles.searchContainer}>
                                <i className="fa fa-search" style={styles.searchIcon}></i>
                                <input type="text" placeholder="Search..." style={styles.searchInput} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" style={getLinkClass({ to: '/' })} onMouseEnter={() => setHovered('/')} onMouseLeave={() => setHovered(null)}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" style={getLinkClass({ to: '/product' })} onMouseEnter={() => setHovered('/product')} onMouseLeave={() => setHovered(null)}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" style={getLinkClass({ to: '/about' })} onMouseEnter={() => setHovered('/about')} onMouseLeave={() => setHovered(null)}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" style={getLinkClass({ to: '/contact' })} onMouseEnter={() => setHovered('/contact')} onMouseLeave={() => setHovered(null)}>Contact</NavLink>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="buttons text-center">
                        <TButton to="/login" iconClass="fa fa-sign-in-alt" style={styles.button}>Login</TButton>
                        <TButton to="/register" iconClass="fa fa-user-plus" style={styles.button}>Register</TButton>
                        <TButton to="/cart" iconClass="fa fa-cart-shopping" style={styles.button}>Cart ({state.length})</TButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
