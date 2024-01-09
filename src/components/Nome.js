import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nome() {
  const location = useLocation();

  return (
    <>
      <li>
        <Link
          className="navbar-brand"
          to={location.pathname}
        >
          Crud Destinos

        </Link>
      </li>
    </>
  );
}
