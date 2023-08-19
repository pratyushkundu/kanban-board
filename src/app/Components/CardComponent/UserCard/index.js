import React from 'react';
import { users,statusImages,statusImg } from '../Cards/Userarrays';

function UserCard({ ticket }) {

  const statusimage = statusImg[ticket.status] || '';
  const priorityImage = statusImages[ticket.priority] || '';


  return (
    <div className='card1'>
      <div className='card_header'>
        <div>
          <p className='profile_header_id' style={{ fontSize: '14px', opacity: '0.8' }}>{ticket.id}</p>
        </div>
      </div>
      <div className='card_body_user'>
        <div style={{ marginTop: '16px', }}>
          <img src={statusimage} style={{ width: '20px', height: '20px' }} />
        </div>
        <div className='card_text_user' style={{ paddingLeft: '7px' }}>
          <p
          >
            {ticket.title.length > 50 ? ticket.title.substring(0, 40) + '...' : ticket.title}
          </p>
        </div>
      </div>

      <div className='card_footer'>
        <div>
          <img
            style={{ width: '20px', height: '20px', marginTop: '4px' }}
            src={priorityImage}
            className='card_footer_imgCellular'
            alt='Cellular Icon'
          />
        </div>
        <div className='card_footer_req'>
          <div className='rounded'></div>
          <div>
            <p className='tag'>
              {ticket.tag[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;