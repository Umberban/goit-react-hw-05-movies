import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/Navigation';

// dont work
export const Layout = () => {
  return (
    <>
    <Navigation/>
    <Outlet />
    </>
  )
};