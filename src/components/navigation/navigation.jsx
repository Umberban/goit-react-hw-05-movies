import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/navigation/navigation.module.css';

 export const Navigation = () => {
    return(
        <>
        <nav className={css.navigation}>
            <NavLink to="/" ClassName={({ isActive }) => (isActive ? 'active' : 'inactive')}>Homie</NavLink>
            <NavLink to="/movies" ClassName={({ isActive }) => (isActive ? 'active' : 'inactive')}>Movies</NavLink>
        </nav>
        </>
    )
};
