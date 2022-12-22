import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

const CreateEvent = () => {
 
     const [data, setData] = React.useState({});
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
            axios.post('http://localhost:8080/events', {...data, creator: user._id}).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }


  return (
    <Box>
        <FormControl isRequired>
            <Heading mb='2rem'><Center>Event Details</Center></Heading>
            <FormLabel>Event name</FormLabel>
            <Input type='text' name='name' onChange={handleChange}></Input>
            <FormLabel>Event description</FormLabel>
            <Input type='text' name='description' onChange={handleChange}></Input>
            <FormLabel>Event date</FormLabel>
            <Input type='datetime-local' name='date' onChange={handleChange}></Input>
            {/* <FormLabel>Event time</FormLabel> */}
            <FormLabel>Event category</FormLabel>
            <Input type='text' name='category' onChange={handleChange}></Input>
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