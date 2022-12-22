import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'

const EventDetail = () => {
  const params  = useParams();
  console.log(params.id);
  const [event, setEvent] = React.useState({});
  const {user} = useSelector(store => store.authStore);

  React.useEffect(() => {
    fetch(`https://take-live-backend-production.up.railway.app/events/${params.id}`)
    .then((response) => response.json())
    .then((data) => {setEvent(data); console.log(data)})
    .catch((err) => {console.log(err);});
  }, [params.id]);


  return (
    <Box w='50%' m='auto' mt='2rem'>
      <Box >
        <Text><b>Event Name</b> : <br/>{event.name}</Text>
      </Box>
      <Box>
        <b>Event Description</b> :  <br/>{event.description}
      </Box>
      <Box>
        <b>Event Category  : </b> 
        <h2>{event.category}</h2>
      </Box>
      <Box>
        <b>Event Date</b>
        <h2>{event.date}</h2>
      </Box>
      <Box>
        <b>Member Limit</b>
        <h2>{event.limit}</h2>
      </Box>
      <Box>
        <b>Other Requirements</b>
        <h2>{event.others}</h2>
      </Box>
      <Button colorScheme={'green'} disabled={user._id==event.creator || +event.limit<= event.attendees?.length}> Request to join</Button>
      {user._id==event.creator&&<Box>
        <b>Pending Requests</b>
        {event.pending?.map((item, index) => {
          return <Box key={index}>
            <h2>{item.name}</h2>
            <Button colorScheme={'green'}>Accept</Button>
            <Button colorScheme={'red'}>Reject</Button>
          </Box>
        })}
        
      </Box>}
    </Box>
  )
}

export default EventDetail