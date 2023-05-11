import React from 'react';
import F1 from '../../images/F1-pt1.png'
import F2 from '../../images/F1-pt2.png'
import F3 from '../../images/F1-pt3.png'
import F4 from '../../images/F1-pt4.png'

const flowerArray = [F1,F2,F3,F4];

function DisplayImage(props){
    return(
        <div class="flex justify-center ">
            <img src={flowerArray[props.dailyScore]} alt = "Fower" />
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