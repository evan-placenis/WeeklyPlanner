import './index.css';
import Home from './Pages/Home'
import Navigation from './components/Navigation';

function App() {
  return (
    
    <Navigation>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <Home/>
    </Navigation> 
  );
}

export default App;
