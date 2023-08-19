import React, { useState } from 'react';
import Navigation from '../Components/NavbarComponent/Navbar';
import UserStatus from './Status';
import UserPriority from './Priority';
import Username from './User';

function App() {
  const [currentView, setCurrentView] = useState('status');
  const [currentDropdown, setCurrentDropdown] = useState('priority');

  console.log(currentView)
  return (
    <div className='app-container'>

      <Navigation  currentView={currentView}
        setCurrentView={setCurrentView}
        currentDropdown={currentDropdown}
        setCurrentDropdown={setCurrentDropdown} />

      {currentView === 'status' && <UserStatus sortBy={currentDropdown} currentView={currentView}/>}
      {currentView === 'priority' && <UserPriority sortBy={currentDropdown} currentView={currentView}/>}
      {currentView === 'users' && <Username sortBy={currentDropdown} />}

    </div>
  );
}

export default App;
