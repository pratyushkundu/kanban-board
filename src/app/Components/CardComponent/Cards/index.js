import React from 'react';
import { users,statusImg,statusImages } from './Userarrays';
import Profile from '../../../../assets/images/Avatar.svg'

function TicketCard({ ticket, currentView }) {
    // console.log(currentView)

    const priorityImage = statusImages[ticket.priority] || ''
    const statusimage = statusImg[ticket.status] || ''

    // console.log(ticket.status)

    const imageToShow = currentView === 'priority' ? statusimage : currentView === 'status' ? priorityImage : '';
    const user = users.find(user => user.userId === ticket.userId) || { image: Profile };

    // console.log(ticket.userId)
    // console.log(user.image)

    return (
        <div className='card1'>
            <div className='card_header'>
                <div>
                    <p className='profile_header_id' style={{ fontSize: '14px', opacity: '0.8' }}>{ticket.id}</p>
                </div>
                    <div>
                        <img
                            src={user.image}
                            className='profile'
                            style={{ width: '24px', height: '24px', paddingTop: '5px' }}
                            alt='Profile'
                        />
                    </div>
            </div>
            <div className='card_body'>
                <div>
                    <p
                        className='card-text'
                        style={{ fontWeight: '600', opacity: '0.8', fontSize: '15px' }}
                    >
                        {ticket.title.length > 50 ? ticket.title.substring(0, 40) + '...' : ticket.title}
                    </p>
                </div>
            </div>
            <div className='card_footer'>
                <div style={{ paddingTop: '4px' }} >
                    <img src={imageToShow} style={{ width: '20px', height: '20px' }} />
                </div>
                <div className='card_footer_req'>
                    <div className='rounded'></div>
                    <div>
                        <p className='' style={{ fontSize: '14px', color: 'grey' }}>
                            {ticket.tag[0]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketCard;