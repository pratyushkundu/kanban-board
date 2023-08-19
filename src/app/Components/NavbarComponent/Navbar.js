import React, { useState,useRef,useEffect } from 'react';
import Settings from '../../../assets/images/setting.png'


function Navigation({ setCurrentView, setCurrentDropdown, currentView, currentDropdown }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); 

  const handleViewChange = event => {
    const newView = event.target.value;
    setCurrentView(newView);
    localStorage.setItem('currentView', newView);
  };

  const handleDropdownChange = event => {
    const newDropdown = event.target.value;
    setCurrentDropdown(newDropdown);
    localStorage.setItem('currentDropdown', newDropdown);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOutsideClick = event => {
    // Here I Close the dropdown if the click is outside of the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    const savedView = localStorage.getItem('currentView');
    const savedDropdown = localStorage.getItem('currentDropdown');

    if (savedView) {
      setCurrentView(savedView);
    }

    if (savedDropdown) {
      setCurrentDropdown(savedDropdown);
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <nav>
      <div className="dropdown" onClick={toggleDropdown} >
        <div> <img src={Settings} style={{ width: '18px', height: '16px', paddingTop: '6px' }} /></div>
        <div><p>Display</p></div>
      </div>
      {dropdownVisible && (
        <div className='innerdiv' ref={dropdownRef} >
          <div className='dropdownSelect'>
            <div className='group'>
              <div><p style={{fontSize:'14px',fontWeight:'500',opacity:'0.7',cursor:'pointer'}}>Grouping</p></div>
              <div>
              <select value={currentView} onChange={handleViewChange}>
                  <option value="status">Status</option>
                  <option value="priority">Priority</option>
                  <option value="users">Users</option>
                </select>
              </div>

            </div>
            <div className='group'>
              <div><p style={{fontSize:'14px',fontWeight:'500',opacity:'0.7',cursor:'pointer'}}>Ordering</p></div>
              <div>
              <select value={currentDropdown} onChange={handleDropdownChange}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;


