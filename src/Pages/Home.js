import '../index.css';
import AddGoal from '../components/Table/AddGoal'
import Row from '../components/Table/Row';
import Outline from '../components/Table/Outline';
import DisplayImage from '../components/ImageControl/DisplayImage';
import CalculateDailyScore from '../components/ImageControl/DailyScore';

import { useState } from 'react';
import React, { useEffect } from 'react'
import {useCallback} from 'react'

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





  //     // Get a reference to all the checkboxes on the page
  //     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  //     console.log("IN component");
  //     // Attach an event listener to each checkbox
  //     checkboxes.forEach(function(checkbox) {
  //       console.log("IN FOR EACH");
  //         checkbox.addEventListener('change', function() {
  //             CalculateDailyScore();
  //         });
  //     });
  //   });
  // }
  
  
  //Made a myScore state varaible so  that useEffect can be used to run "Display Image"
  //whenever it changes since the state varaible is its prop
  const [myScore, setMyScore] = useState(0);
  var score = 0;
  //get score from row component
  const getScore = (data) =>{
    setMyScore(data);
  }

  {useEffect(()=>{
    console.log("my variable has changed",myScore)
  },[myScore])}

  return (
    <div className = "Home min-h-screen">
      <Outline/>
      <div class = "">
        {goals.map((entry)=>{
          return(
              <Row goal={entry.goal} onChange={getScore}/>
          );
        })}
      </div>
      
      <div class = "space-y-40">
        <AddGoal newGoal = {newGoal}/>
        {/* <DisplayImage dailyScore = {myScore}/> */}
      </div>
    </div>
  );
}

export default Home;
