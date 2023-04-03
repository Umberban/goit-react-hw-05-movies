import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/navigation/navigation.module.css';

 export const Navigate = () => {
    return(
        <>
        <nav className={css.navigation}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active link' : 'inactive link')}>Homie</NavLink>
            <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active link' : 'inactive link')}>Movies</NavLink>
        </nav>
        </>
    )
};
