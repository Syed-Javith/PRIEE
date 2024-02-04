import React from "react";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase.Config';
import { useNavigate } from "react-router-dom";
function Signin()
{
    const navigate = useNavigate() 
    const provider = new GoogleAuthProvider()
    async function login(){
        try {
          await signInWithPopup(auth,provider)
          
          navigate('/home');
          
        } catch (error) {
          console.log(error);
        }
            
        }  
return(
    <button onClick={login}>Login</button>
)

}
export default Signin;