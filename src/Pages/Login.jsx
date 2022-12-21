import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
    /* states to handle the form data */
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    



  return (
    <Box display={'flex'} justifyContent='center' alignItems={'center'} minH='30rem' border={'1px solid black'}>

        <FormControl isRequired maxWidth={{lg:'40%'}}>
            <Heading mb='2rem'><Center>Login</Center></Heading>
            <FormLabel>UserName</FormLabel>
            <Input type='text'></Input>
            <FormLabel>Password</FormLabel>         
            <Input type='password'></Input>
            <Button  display={'block'} m='auto' mt='2rem' colorScheme='teal' type='submit'>Login</Button>
        </FormControl>
    </Box>
  )
}

export default Login