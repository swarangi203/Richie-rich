// components/Header/ProfileIcon.jsx
import { AccountCircle, AccountCircleRounded } from '@mui/icons-material';
import { changeLanguage } from 'i18next';
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
      };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
      >
        <AccountCircleRounded sx={{fontSize:30}} />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-20">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Profile
          </a>
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
          <button className="block px-4 py-2 hover:bg-gray-100">{t('accessibility')}</button>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
