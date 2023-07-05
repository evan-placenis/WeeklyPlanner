import React, {useEffect} from 'react';
import { useState } from 'react';
function AddGoal(props){

    const[goal, setGoal] = useState(''); //getting the goal from state
    // // 
    useEffect(()=>{
        if(!window) return;
            const modal = document.querySelector('#authentication-modal');
            const newGoalButton = document.querySelector('#newGoalButton');
            const closeModal = document.querySelector("#closeModal")

            function handleClick(){
                modal.classList.remove('hidden');
            }
            newGoalButton.addEventListener('click', handleClick);

            function handleClose(){
                modal.classList.add('hidden');
            }
            closeModal.addEventListener('click', handleClose);

            return()=>{
                newGoalButton.removeEventListener('click', handleClick);
            }
    }, []);

    return(
        <div>
            <button id = "newGoalButton" class="block mx-auto m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" type="button">
                + New Goal
            </button>
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-md max-h-full">
                    
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button id = "closeModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Weekly Goal</h3>
                            <form
                                Id = "myForm" 
                                onSubmit={(e) => {
                                    e.preventDefault(); //prevent page refresh
                                    //setGoal(''); //clear text feild
                                    props.newGoal(goal);
                                    document.getElementById("myForm").reset();
                                }}
                                class="space-y-6" 
                                action="#">
                                <div>
                                    <label for="goal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Goal</label>
                                    <input type="goal" 
                                            name="goal" id="goal" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="My Goal" 
                                            required
                                            onChange={(e) =>{
                                                setGoal(e.target.value);
                                                console.log(goal);
                                            }}
                                            />
                                </div>
                                <button type="submit" class="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default AddGoal


{/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block mx-auto m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" type="button">
+ New Goal
</button>
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden  fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> */}