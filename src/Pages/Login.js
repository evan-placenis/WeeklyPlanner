import React, {useEffect} from 'react';
function Login(){
    useEffect(()=>{
        if(!window) return;
            const nav = document.querySelector('#navigation');
            nav.classList.add('hidden');

            const loginButton = document.querySelector('#loginButton');

            function handleClick(){
                window.location.href = window.location.href + "Home" 
            }
            loginButton.addEventListener('click', handleClick);

            return()=>{
                loginButton.removeEventListener('click', handleClick);
            }
    }, []);
    return(
        <div class = "flex flex-col items-center ">
            <h1 class = "text-3xl font-bold mt-10">LOGIN</h1>
            <ul class="py-2 text-center mt-20">
                <li class = "py-2">
                    <input type = "text" placeholder = "Username"/> 
                </li>
                <li class = "py-2">
                    <input type = "text" placeholder = "Password"/> 
                </li>
                <li class = 'py-2'>
                    <button id = "loginButton" class = "rounded-full bg-purple-500 text-white px-4 py-1 hover:bg-purple-700"> Sign in </button>
                </li>
            </ul>
        </div>
    );
    
}

export default Login;