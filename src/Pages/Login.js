import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Login(){

    //RETRIEVE DATA FROM DATABASE AFTER SIGNING IN
    const[UsrName, setUsrName] = useState("")
    const[UsrPassword, setUsrPassword] = useState("")
    const[alertMsg, setAlertMsg] = useState("")
    const[nav, setNav] = useState("")

    const navigate = useNavigate();


    // //HIDE NAVIGATION BAR AND NAVIGATION CONTROL
    useEffect(()=>{
        if(!window) return;
            const navigation_header = document.querySelector('#navigation');
            navigation_header.classList.add('hidden');
            setNav(navigation_header)
    }, []);

    //HANDLE FORM SUBMISSION
    function submit(e) {
        e.preventDefault()
        const user = {
            username: UsrName,
            password: UsrPassword
        }
        //SEND user TO BACKEND
        fetch("/Login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
          })
            //RETREIVE RESPONSE FROM BACKEND
            .then(response => response.json())
            .then(result => {
              // Handle the response from the backend
              const returned_name = Object.keys(result)[0];
              const returned_password = Object.values(result)[0][0];
              const returned_message = Object.values(result)[0][0]; // Same location as password bc this is where message is stored if null
              const returned_score =  Object.values(result)[0][1];

              //Check to see if correct user was found (returned_name is null if not found)
              if(returned_name !== "null"){
                nav.classList.remove('hidden'); //allow nagivation banner to be seen again
                navigate(`/Home?name=${returned_name}&score=${returned_score}`)
              }else{
                setAlertMsg(returned_message)
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
    };

    //ALERT MESSAGE ON INCORRECT ENTRIES
    useEffect(()=>{
        if(alertMsg !== ''){
            alert(alertMsg);
        }
    },[alertMsg]);

    return(
        <div class = "flex flex-col items-center ">
            <h1 class = "text-3xl font-bold mt-10">Login</h1>
            <form required action="Login" method ="POST">
                <ul class="py-2 text-center mt-20">
                    <li class = "py-2">
                        <input name = "username" type = "text" onChange={(e) => {setUsrName(e.target.value)}} placeholder = "Enter Username" required /> 
                    </li>
                    <li class = "py-2">
                        <input name = "password" type = "password" onChange={(e) => {setUsrPassword(e.target.value)}} placeholder = "Enter Password" required /> 
                    </li>
                    <li class = 'py-2'>
                        <button type = "submit" onClick = {submit} class = "rounded-full bg-purple-500 text-white px-4 py-1 hover:bg-purple-700"> Sign in </button>
                    </li>
                    <li class = 'text-blue-400'>
                        <a href = "/Register">Register</a>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Login;


// <form required action="Login" method ="POST">
//                 <ul class="py-2 text-center mt-20">
//                     <li class = "py-2">
//                         <input required name = "username" type = "text" placeholder = "Enter Username"/> 
//                     </li>
//                     <li class = "py-2">
//                         <input required name = "password" type = "password" placeholder = "Enter Password"/> 
//                     </li>
//                     <li class = 'py-2'>
//                         <button type = "submit" id = "loginButton" class = "rounded-full bg-purple-500 text-white px-4 py-1 hover:bg-purple-700"> Sign in </button>
//                     </li>
//                     <li class = 'text-blue-400'>
//                         <a href = "/Register">Register</a>
//                     </li>
//                 </ul>
//             </form>
