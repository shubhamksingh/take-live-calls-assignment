import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
     <Box>
       <Navbar/>
       <AllRoutes/>
     </Box>
  );
}

export default App;
