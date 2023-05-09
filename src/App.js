import './index.css';
import AddGoal from './components/Table/AddGoal'
import Row from './components/Table/Row';
import Outline from './components/Table/Outline';
import Navigation from './components/Navigation';
import Table from './components/Table'

import { useState } from 'react';

function App() {
  const[goals, setGoals] = useState([
      {
        goal: "brush teeth"
      },
      {
        goal: "workout"
      },
      {
        goal: "code"
      },
      {
        goal: "sleep"
      },
    ])

  function newGoal(goal){
    const newGoal = {
      goal: goal
    }
    setGoals([...goals, newGoal])
  }
  
  return (
    <div className = "App">
      <Navigation/>
      <Outline/>
      {goals.map((entry)=>{
        return(
            <Row goal={entry.goal}/>
        );
      })}
      <AddGoal newGoal = {newGoal}/>

    </div>
  );
}

export default App;
