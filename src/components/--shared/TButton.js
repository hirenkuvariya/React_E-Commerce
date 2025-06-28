
import React from 'react';
import { NavLink } from 'react-router-dom';

const TButton = ({ to, iconClass, children, style = {}, className = '' }) => {
    return (
        <NavLink to={to} className={`btn btn-outline-dark m-2 ${className}`} style={style}>
            {iconClass && <i className={`${iconClass} mr-1`}></i>}
            {children}
        </NavLink>
    );
};

export default TButton;
