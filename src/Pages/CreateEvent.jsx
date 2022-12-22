import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

const CreateEvent = () => {
 
     const [data, setData] = React.useState({category: 'cricket'});
     const {user} = useSelector(store => store.authStore);

        const handleChange = (e) => {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit =  (e) => {
            e.preventDefault();
            console.log(data);
            // Make a request to the backend to create an event using axios
            axios.post('https://take-live-backend-production.up.railway.app/events', {...data, creator: user._id, pending: [], attendees : []}).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }


  return (
    <Box p='2rem'>
        <FormControl isRequired w='50%' m='auto'>
            <Heading mb='2rem'><Center>Event Details</Center></Heading>
            <FormLabel>Event name</FormLabel>
            <Input type='text' name='name' onChange={handleChange}></Input>
            <FormLabel>Event description</FormLabel>
            <Input type='text' name='description' onChange={handleChange}></Input>
            <FormLabel>Event date</FormLabel>
            <Input type='datetime-local' name='date' onChange={handleChange}></Input>
            {/* <FormLabel>Event time</FormLabel> */}
            <FormLabel>Event category</FormLabel>
            <Select  name='category' onChange={handleChange}>
                <option value='cricket'>Cricket</option>
                <option value='tennis'>Tennis</option>
                <option value='football'>Football</option>
                <option value='badminton'>Badminton</option>

            </Select>
            {/* <Input type='text' name='category' onChange={handleChange}></Input> */}
            <FormLabel>Member Limit</FormLabel>
            <Input type='number' name='limit' onChange={handleChange}></Input>
            <FormLabel>Other requirements</FormLabel>
            <Input type='text' name='others' onChange={handleChange}></Input>
            <Button display={'block'} m='auto' mt='1rem' colorScheme={'teal'} onClick={handleSubmit}>Create Event</Button>
        </FormControl>
    </Box>
  )
}

export default CreateEvent