import React from 'react'
import { useParams } from 'react-router-dom';

const NotFound = () => {
  const params  = useParams();
  console.log(params);
  return (
    <div>NotFound</div>
  )
}

export default NotFound