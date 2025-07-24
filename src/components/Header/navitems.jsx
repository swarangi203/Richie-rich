import React from 'react';

const NavItems = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-sm">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavItems;
