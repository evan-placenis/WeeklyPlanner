import './index.css';
import Home from './Pages/Home'
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Farm from './Pages/Farm';

function App() {
  return (
    
    <BrowserRouter>
      <Navigation>
        <Routes>

          <Route path = '/Home' element = {<Home />}/>
          <Route path = '/Farm' element = {<Farm />}/>
          
        </Routes>
      </Navigation> 
    </BrowserRouter>
    
  );
}

export default App;