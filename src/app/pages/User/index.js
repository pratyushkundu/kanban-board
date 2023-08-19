import React, { useState, useEffect } from 'react';
import UserCard from '../../Components/CardComponent/UserCard';
import UserStatusInfo from '../../Components/StatusComponent/UserStatus';


function Username({sortBy}) {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const userTasksCount = {}; // To store user's task counts
  tickets.forEach(ticket => {
    if (!userTasksCount[ticket.userId]) {
      userTasksCount[ticket.userId] = 1;
    } else {
      userTasksCount[ticket.userId]++;
    }
  });

  let sortedTickets = [];
  if (sortBy === 'priority') {
    sortedTickets = tickets.sort((a, b) => a.priority - b.priority);
  } else if (sortBy === 'title') {
    sortedTickets = tickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className='cards'>
      {users.map(user => (
        <div className='card_component' key={user.id}>
        <div className='statusTickets'>
          <UserStatusInfo username={user.name} count={userTasksCount[user.id] || 0} ticket={user}/>
          </div>
          <div className='sortedTickets'>
          {sortedTickets
            .filter(ticket => ticket.userId === user.id)
            .map(ticket => (
              <UserCard ticket={ticket} key={ticket.id} />
            ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default Username;
