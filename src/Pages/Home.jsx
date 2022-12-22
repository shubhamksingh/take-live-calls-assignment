import { Box, Button, Center, Heading, Select, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
   return (
    <Box>
      <Heading mt='2rem'>
        <Center>
           Welcome to playo App
        </Center>
      </Heading>
    </Box>
   )
  ;
}

export default Home;
