import React, { useState } from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import logo from '../assets/icon.jpg';
import '../styles/navSytle.css';

/**
 * Sidebar component
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = () => {
  /**
   * State to track whether the sidebar is expanded or collapsed
   * @type {[boolean, function]} expanded - A stateful value representing whether the sidebar is expanded
   */
  const [expanded, setExpanded] = useState(false);

  /**
   * Toggles the sidebar between expanded and collapsed states
   */
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-gray-800 h-screen ${expanded ? 'w-64' : 'w-20'} fixed left-0 top-0 flex flex-col transition-all duration-600`}>
      {/* Brand/logo */}
      <div className="py-4 text-center text-white font-semibold">
        <img src={logo} alt="Logo" className="mx-auto max-w-full max-h-full" style={{ maxWidth: '60%', maxHeight: '100%' }} />
      </div>
      
      {/* Navigation links */}
      <ul className={`flex flex-col space-y-2 my-0`}>
        <li>
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2 block flex flex-col items-center sidebar-link">
            <AddHomeIcon />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2 block flex flex-col items-center sidebar-link">
            <PersonRoundedIcon />
            <span className="mr-2">Me</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2 block flex flex-col items-center sidebar-link">
            <MoveToInboxRoundedIcon />
            <span className="mr-2">Inbox</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white px-4 py-2 block flex flex-col items-center sidebar-link">
            <Groups2RoundedIcon />
            <span className="mr-2">Team</span>
          </a>
        </li>
      </ul>

      {/* Toggle button */}
      <button
        className={`bg-gray-700 hover:bg-gray-600 text-white py-2 mt-auto px-4`}
        onClick={toggleSidebar}
      >
        {expanded ? '←' : '→'}
      </button>
    </div>
  );
}

export default Sidebar;
