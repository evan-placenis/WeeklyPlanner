import '../index.css';
import AddGoal from '../components/Table/AddGoal'
import Row from '../components/Table/Row';
import Outline from '../components/Table/Outline';

import { useState } from 'react';

function Home() {
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
    <div className = "Home min-h-screen">
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

export default Home;
