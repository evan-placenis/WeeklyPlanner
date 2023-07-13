import '../index.css';
import AddGoal from '../components/Table/AddGoal'
import Row from '../components/Table/Row';
import Outline from '../components/Table/Outline';
import DisplayImage from '../components/ImageControl/DisplayImage';

import React, { useEffect, useState} from 'react'
import {useCallback} from 'react'
import {useLocation} from 'react-router-dom'

function Home() {
  const [myScore, setMyScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const[goals, setGoals] = useState([
      {goal: "brush teeth"},
      {goal: "workout"},
      {goal: "code"},
      {goal: "sleep"},
    ])

  //RETRIEVE PARAMS FROM LOGIN PAGE
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const user_score = searchParams.get('score');
  console.log(name, user_score);
  

  function newGoal(goal){
    const newGoal = {
      goal: goal
    }
    setGoals([...goals, newGoal])
  }
  //get score from row component
  const getScore = (data) =>{
    setMyScore(data);
  }

  {useEffect(()=>{
    console.log("my score has changed",myScore)

    //if goals change update max score
    var numGoals = goals.length;
    setMaxScore(7*numGoals);
    setProgress((myScore/maxScore*100).toFixed(0));
    console.log(maxScore, progress);

  },[myScore, goals])}


  return (
    <div className = "Home min-h-screen">
      <Outline/>
      <div>
        {goals.map((entry)=>{
          return(
              <Row goal={entry.goal} onChange={getScore}/>
          );
        })}
      </div>
      
      <div class = "space-y-40">
        <AddGoal newGoal = {newGoal}/>
        <DisplayImage current_Score = {myScore} max_Score = {maxScore} />
      </div>
      <div class = "block">
        <div class = "flex justify-center font-bold text-gray-900 dark:text-white">
          SCORE: {myScore * 10}
        </div>

        <div class = "flex justify-left font-italic text-purple-400 mt-10 mx-2">
           TOP SCORE: {myScore * 10}
        </div>
{/* 
        <div class = "flex justify-center font-bold text-gray-900 dark:text-white py-5">
          STREAK
        </div> */}
      </div>
      
    
      <div class="w-full rounded-full dark:bg-gray-700 ">
        <h1 class = "mx-2 my-1 text-xl font-bold text-gray-900 dark:text-white">Progress:</h1>
        <div class="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full mx-2" style = {{
          width: `${progress}%`,
          backgroundColor: '#8B5CF6', // Purple color
          color: '#FFFFFF', // White text color
        }} > {progress}% </div>
      </div>
      
    </div>
  );
}

export default Home;


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
  