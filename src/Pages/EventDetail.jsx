import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const EventDetail = () => {
  const params  = useParams();
  console.log(params.id);
  const [event, setEvent] = React.useState({});

  React.useEffect(() => {
    fetch(`https://take-live-backend-production.up.railway.app/events/${params.id}`)
    .then((response) => response.json())
    .then((data) => {setEvent(data);})
    .catch((err) => {console.log(err);});
  }, [params.id]);


  return (
    <Box w='50%' m='auto' mt='2rem'>
      <Box >
        <Text><b>Event Name</b> : {event.name}</Text>
      </Box>
      <Box>
        <h1>Event Description</h1>
        <h2>{event.description}</h2>
      </Box>
      <Box>
        <h1>Event Category  : {event.category}</h1>
      </Box>
      <Box>
        <h1>Event Date</h1>
        <h2>{event.date}</h2>
      </Box>
      <Box>
        <h1>Member Limit</h1>
        <h2>{event.limit}</h2>
      </Box>
      <Box>
        <h1>Other Requirements</h1>
        <h2>{event.others}</h2>
      </Box>

 
    </Box>
  )
}

export default EventDetail