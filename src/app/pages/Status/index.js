import React, { useState, useEffect } from 'react';
import TicketCard from '../../Components/CardComponent/Cards';
import StatusInfo from '../../Components/StatusComponent/Status';

function UserStatus({ sortBy, currentView }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets));
  }, []);

  const getStatusTickets = (status) => {
   return tickets.filter(ticket => ticket.status === status);
  }

  let sortedTickets = [];
  if (sortBy === 'priority') {
    sortedTickets = tickets.sort((a, b) => a.priority - b.priority);
  } else if (sortBy === 'title') {
    sortedTickets = tickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      <div className='cards'>
        {['In progress', 'Todo', 'Backlog', 'Cancelled', 'Done'].map(status => (
          <div className='card_component' key={status}>
            <div className='statusTickets'>
              <StatusInfo status={status} count={getStatusTickets(status).length} />
            </div>
            <div className='sortedTickets'>
              {sortedTickets
                .filter(ticket => ticket.status === status)
                .map(ticket => (
                  <TicketCard ticket={ticket} key={ticket.id} currentView={currentView} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserStatus;
