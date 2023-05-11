
import { useState } from 'react';
import React, { useEffect } from 'react'
import DisplayImage from '../ImageControl/DisplayImage';
var score = 0; //GOLOBAL RN, CHANGE TO A PROPERTY OF USER
function Row(props){
      //breaking up each checkbox into a state array
      const[checkboxes, setCheckBoxes] = useState([
        {id: `mon_${props.goal}`,isChecked: false},
        {id: `tue_${props.goal}`,isChecked: false},
        {id: `wed_${props.goal}`,isChecked: false},
        {id: `thur_${props.goal}`,isChecked: false},
        {id: `fri_${props.goal}`,isChecked: false},
        {id: `sat_${props.goal}`,isChecked: false},
        {id: `sun_${props.goal}`,isChecked: false}
    ])

    //evaluating the current day of the week and mapping it to a string
    var day = "";
    switch(new Date().getDay()){
        case 0:
            day = "sun";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 4:
            day = "thur";
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "sat";
    }
    //   useEffect(()=>{
    //     if(isChecked){
    //       console.log("chcecked");
    //     }
    //   },[isChecked]);

    

    //update checkbox's id with checked value and ensure only checkboxes of
    //current day can be checked
      function handleCheckedboxChange(event){
        const {id, checked} = event.target;
        if(id.includes(day)){
            setCheckBoxes((prevCheckboxes) =>(
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === id ? {...checkbox, isChecked: checked} : checkbox
                )
            ))
            calculateScore();
        }else{
            console.log("not correct day");
             event.target.checked = false;
        }
  
      }
      
      //calcuate score based off of checkboxes (mb put into seperate file)
      function calculateScore(){
        
        for(const i in checkboxes){
            if(checkboxes[i].id.includes(day)){
                if(!checkboxes[i].isChecked){
                    score = score + 1;
                    console.log(score, "is checked");
                }else{
                    score = score - 1;
                    console.log(score,"un checked");
                }
                props.onChange(score)// send data back to parent Home
            } 
        }

      }


      return(
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light">
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-normal overflow-hidden break-all py-4 font-medium text-center" style={{ width: "5.2rem" }}>
                        {props.goal ? props.goal : 'no Goal'}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`mon_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`tue_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`wed_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`thur_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`fri_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`sat_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <label class="container">
                          <input type="checkbox" id={`sun_${props.goal}`} checked={checkboxes.isChecked} onChange={handleCheckedboxChange}/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Row;