import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const CreateEvent = () => {
 
     const [data, setData] = React.useState({});

        const handleChange = (e) => {
            setData({
                ...data,
                [e.target.name]: e.target.value
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
            <Input type='datetime-local' name='date-time' onChange={handleChange}></Input>
            {/* <FormLabel>Event time</FormLabel> */}
            <FormLabel>Event category</FormLabel>
            <Input type='text' name='category' onChange={handleChange}></Input>
            <FormLabel>Member Limit</FormLabel>
            <Input type='number' name='member-limit' onChange={handleChange}></Input>
            <FormLabel>Other requirements</FormLabel>
            <Input type='text' name='others' onChange={handleChange}></Input>
            <Button display={'block'} m='auto' mt='1rem' colorScheme={'teal'} >Create Event</Button>
        </FormControl>
    </Box>
  )
}

export default CreateEvent