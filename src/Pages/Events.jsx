import { Box, Button, Select, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

function Events() {
  const {token} = useSelector(store => store.authStore);
  
  const [events, setEvents] = useState([{
    id: 1,
    name: 'Event 1',
    description: 'This is the first event',
    }, {
    id: 2,
    name: 'Event 2',
    description: 'This is the second event',
  }]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Make a request to the backend to get the list of events
    
    setLoading(true);
    fetch('http://localhost:8080/events')
      .then((response) => response.json())
      .then((data) => {setEvents(data); setLoading(false);}) 
      .catch((err) => {console.log(err); setLoading(false);});
  }, []);
  if(!token){
    alert('Please login to continue');
    return <Navigate to='/login' />
  }
  return (
    <Box maxW='50%' m='auto' p='1rem' mt='2rem'>
      <Select mb='1rem'>
        <option value='all'>All</option>
        <option value='upcoming'>Upcoming</option>
        <option value='past'>Past</option>
        <option value='badminton'>Badmintion</option>
        <option value='cricket'>Cricket</option>
        <option value='football'>Football</option>
      </Select>
      {loading && <p>{`Loading events...`}</p>}
      {events.map((event) => (
        <Box key={event._id} display='flex' alignItems={'center'} justifyContent={'space-between'}>
          <Box mt='0.5rem' mb='0.5rem'>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <Tag  size='sm' variant='subtle' colorScheme='cyan'>
             <TagLeftIcon boxSize='12px' as={'+'}/>
              <TagLabel>Cyan</TagLabel>
         </Tag>
         </Box>
          <Button colorScheme={'green'}  onClick={() => navigate('/event/event.id')/* navigate to event details page */ }>View details</Button>
        </Box>
      ))}
    </Box>
  );
}

export default Events;
