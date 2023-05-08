import './index.css';
import Table from './components/Table';
import { useState } from 'react';
function App() {
  const[name, setName] = useState('dev');
  return (
    <div className = "App">
      <h1 class = "font-bold text-center">Weekly Planner</h1>
    
      <Table name = {name} goal = "Brush Teeth" />
    </div>
  );
}

export default App;
