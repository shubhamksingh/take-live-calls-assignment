import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box p='1rem'>
        <Flex justifyContent={'center'} gap='1rem'>
            <Link to='/'><Button colorScheme={'teal'}>Home</Button></Link>
            <Link to='/events'><Button colorScheme={'teal'}>Events</Button></Link>
            <Link to='/myevents'><Button colorScheme={'teal'}>My Events</Button></Link>
            <Link to='/create'><Button colorScheme={'teal'}>Create Event</Button></Link>
            <Link to='/events/accepted'><Button colorScheme={'teal'}>Accepted</Button></Link>
            <Link to='/events/pending'><Button colorScheme={'teal'}>Pending</Button></Link>
            <Link to='/login'><Button colorScheme={'teal'}>Login</Button></Link>
            <Link to='/signup'><Button colorScheme={'teal'}>Signup</Button></Link>
            
        </Flex>
    </Box>
  )
}

export default Navbar