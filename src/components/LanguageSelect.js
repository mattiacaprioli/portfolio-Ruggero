import React, { useState, useEffect, useRef } from 'react';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const languages = [
  { name: "English", code: "en" },
  { name: "Italiano", code: "it" },
  { name: "Français", code: "fr" },
];

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Chiude il dropdown quando si clicca fuori dal menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative h-10 ml-4">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        type="button"
        className="p-2 peer w-full h-full bg-transparent text-accent font-bold text-left outline outline-0 focus:outline-0 transition-all text-sm px-3 py-2.5"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="items-center flex flex-row gap-2 mr-2">
            <FiGlobe className="text-accent" />
            <span className="text-xs tablet:text-sm">
              {Capitalize(i18n.language)}
            </span>
          </div>
          <FiChevronDown size={16} />
        </div>
      </button>
      {open && (
        <ul
          ref={menuRef}
          role="listbox"
          className="absolute top-full left-0 w-fit max-h-96 bg-tertiary p-3 border border-blue-gray-50 rounded-md shadow-lg font-sans text-sm font-semibold text-blue-gray-500 overflow-auto focus:outline-none z-50"
        >
          {languages.map(({ name, code }) => (
            <li
              onClick={() => changeLanguage(code)}
              key={name}
              role="option"
              aria-selected={i18n.language === code}
              className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:text-blue-gray-900 transition-all"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
