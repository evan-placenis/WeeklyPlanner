import './index.css';
import Home from './Pages/Home'
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Farm from './Pages/Farm';

function App() {
  return (
    
    <Navigation>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <BrowserRouter>
        <Routes>

          <Route path = '/Home' element = {<Home />}/>
          <Route path = '/Farm' element = {<Farm />}/>
          
        </Routes>
      </BrowserRouter>
    </Navigation> 
  );
}

export default App;