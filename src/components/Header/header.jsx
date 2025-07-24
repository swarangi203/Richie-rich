import React from 'react';
import NavItems from './navitems';
import ProfileIcon from './profileIcon';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-blue-600 text-white shadow-md">
        <h2 style={{fontWeight: 'bold'}}>Richie Rich</h2>
      <NavItems />
      <ProfileIcon/>
    </div>
  );
};

export default Header;
