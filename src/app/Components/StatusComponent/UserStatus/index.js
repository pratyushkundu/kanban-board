import React from 'react';
import { users } from '../../CardComponent/Cards/Userarrays';
import Profile from '../../../../assets/images/Avatar.svg'
import menubar from '../../../../assets/images/menu.png'
import plus from '../../../../assets/images/plus.png'

function UserStatusInfo({ username, count,ticket}) {

  const user = users.find(user => user.userId === ticket.id) || { image: Profile };
  console.log(ticket.id)
  return (
    <>
      <div className='status_info'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '18px', height: '18px' }}>
            <img src={user.image} style={{ width: '18px', height: '18px' }} />
          </div>
          <div style={{ marginLeft: '12px', fontWeight: '500', opacity: '0.9' }}>{username}</div>
          <div style={{ marginLeft: '12px', fontWeight: '400', opacity: '0.7' }}>{count}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '14px', height: '14px', cursor: 'pointer' }}>
            <img src={plus} style={{ width: '14px', height: '14px', opacity: '0.5' }} />
          </div>
          <div style={{ width: '18px', height: '18px', marginLeft: '5px', marginTop: '6px', cursor: 'pointer' }}>
            <img src={menubar} style={{ width: '18px', height: '18px' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserStatusInfo;