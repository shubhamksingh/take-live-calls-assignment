import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../Store/Auth/auth.actions';

const Signup = () => {
     /* states to handle the form data */
     const dispatch = useDispatch();
    //  const {error} = useSelector(store => store.authStore);
     const [name, setName] = React.useState('')
     const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')


    /* function to handle the form submission */
    const handleSubmit = async e => {
        e.preventDefault()
        dispatch(signupUser({name, username, password})).then(res => {
            alert('Signup Successful');
        }).catch(err => {
            alert('Signup Failed');
            console.log(err);
        });
        
        console.log(name, username, password)
    }


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
            <Button colorScheme={'teal'} display='block' m='auto' mt='1rem' type="submit" onClick={handleSubmit}>Submit</Button>
        </FormControl>
 
    </Box>
  )
}

export default Signup