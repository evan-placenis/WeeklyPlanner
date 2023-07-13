import React from 'react';
import F1 from '../../images/F1-pt1.png'
import F2 from '../../images/F1-pt2.png'
import F3 from '../../images/F1-pt3.png'
import F4 from '../../images/F1-pt4.png'

const flowerArray = [F1,F2,F3,F4];

function DisplayImage({current_Score, max_Score}){
    //LOGIC FOR WHAT PICTURE TO DISPLAY
    var index = 0
    var quarter = max_Score/4;
    var half = max_Score/2;
    var three_quarters = max_Score *(3/4);
    var full = max_Score - (max_Score*0.1); // once they reach 90 percent of their goals

    if(current_Score <= quarter){
        index = 0 
    }else if (current_Score > quarter && current_Score <= half){
        index = 1
    }else if (current_Score > half && current_Score <= three_quarters){
        index = 2
    }else if (current_Score > three_quarters){
        index = 3
    }
    return(
        <div class="flex justify-center ">
            <img src={flowerArray[index]} alt = "Fower" />
        </div>
    )

}

export default DisplayImage;

//AS A COMPONENT

    // if(props.score>5){
    //     console.log("SCORE IS GREATER")
    //     props.curFlower += 1; //error with it being read only
    // }
    // return(
    //     <div>
    //         <img class = "items-center"src={flowerArray[props.curFlower]} alt = "Fower" />
    //     </div>
    // );