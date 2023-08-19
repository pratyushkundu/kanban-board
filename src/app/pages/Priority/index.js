import React, { useState, useEffect } from 'react';
import StatusInfo from '../../Components/StatusComponent/Status';
import TicketCard from '../../Components/CardComponent/Cards';

function UserPriority({ sortBy,currentView }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets));
  }, []);

  const priorityMapping = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };

  const priorityTickets = {};

  tickets.forEach(ticket => {
    const priorityType = priorityMapping[ticket.priority];
    if (!priorityTickets[priorityType]) {
      priorityTickets[priorityType] = [];
    }
    priorityTickets[priorityType].push(ticket);
  });

  let sortedTickets = [];
  if (sortBy === 'priority') {
    sortedTickets = tickets.sort((a, b) => a.priority - b.priority);
  } else if (sortBy === 'title') {
    sortedTickets = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      <div className='cards'>
        {Object.entries(priorityTickets).map(([priorityType, ticketsByPriority]) => (
          <div className='card_component' key={priorityType}>
            <div className='statusTickets'>
              <StatusInfo status={priorityType} count={ticketsByPriority.length} />
            </div>
            <div className='sortedTickets'>
              {sortedTickets
                .filter(ticket => priorityMapping[ticket.priority] === priorityType)
                .map(ticket => (
                  <TicketCard ticket={ticket} key={ticket.id} currentView={currentView}/>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserPriority;

