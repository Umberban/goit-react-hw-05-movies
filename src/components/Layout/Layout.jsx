import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'components/navigation/Nav';

// dont work
export const Layout = () => {
  return (
    <>
    <Navigate/>
    <Outlet />
    </>
  )
};