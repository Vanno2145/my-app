import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Style/Submenu.css';

function Main() {
  const [menu, setMenu] = useState('hide');

  const handleClick = () => {
    setMenu(prevState => {
      const newState = prevState === 'hide' ? 'show' : 'hide';
      return newState;
    });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/poets" onClick={handleClick}>Poets</Link>
            <ul className={menu}>
              <li>
                <Link to="/poets/franko">Franko</Link>
              </li>
              <li>
                <Link to="/poets/taras">Taras</Link>
              </li>
              <li>
                <Link to="/poets/lesya">Lesya</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;