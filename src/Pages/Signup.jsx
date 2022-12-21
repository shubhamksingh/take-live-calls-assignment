import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
     /* states to handle the form data */
     const [name, setName] = React.useState('')
     const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)



  return (
    <Box display={'flex'} justifyContent='center' alignItems={'center'} minH='30rem'>
        <FormControl isRequired maxW='50%' >
            <Heading mb='2rem'><Center>Signup</Center></Heading>
            <FormLabel>Name</FormLabel>
            <Input type="text"  onChange={
                e => setName(e.target.value)
            }/>
            <FormLabel>UserName</FormLabel>
            <Input type="text"  onChange={
                e =>setUsername(e.target.value)
            }/>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={
                e => setPassword(e.target.value)   
            }/>
            <Button colorScheme={'teal'} display='block' m='auto' mt='1rem' type="submit">Submit</Button>
        </FormControl>
 
    </Box>
  )
}

export default Signup