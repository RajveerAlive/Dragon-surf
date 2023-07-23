import React, { useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    // For example, using Firebase's signOut function
    signOut(auth);
  };

  return (
    <div className='navbar'>
      <span className='logo'>Dragon Surf</span>
      <div className='user' onClick={() => setShowDropdown(!showDropdown)}>
        <span>{currentUser.displayName}</span>
        <img src={currentUser.photoURL} alt='' />
        {showDropdown && (
          <div className='dropdown-menu'>
            <button onClick={handleLogout}>Log out</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
