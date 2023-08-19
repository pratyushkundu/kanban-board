import React, { useState, useEffect } from 'react';
import StatusInfo from '../../Components/StatusComponent/Status';
import TicketCard from '../../Components/CardComponent/Cards';

function UserPriority({ sortBy, currentView }) {
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

  const priorityOrder = ['Urgent', 'High', 'Medium', 'Low', 'No priority'];

  const sortedTickets = sortBy === 'priority'
    ? [...tickets].sort((a, b) => priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority))
    : [...tickets].sort((a, b) => a.title.localeCompare(b.title));

  const priorityTickets = {};

  sortedTickets.forEach(ticket => {
    const priorityType = priorityMapping[ticket.priority];
    priorityTickets[priorityType] = (priorityTickets[priorityType] || []).concat(ticket);
  });

  return (
    <div className='cards'>
      {priorityOrder.map(priorityType => (
        <div className='card_component' key={priorityType}>
          <div className='statusTickets'>
            <StatusInfo status={priorityType} count={priorityTickets[priorityType]?.length || 0} />
          </div>
          <div className='sortedTickets'>
            {priorityTickets[priorityType]?.map(ticket => (
              <TicketCard ticket={ticket} key={ticket.id} currentView={currentView} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserPriority;

