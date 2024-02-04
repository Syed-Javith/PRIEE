import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from './Firebase.Config';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
 const Home = () => {
    const [user,loading]= useAuthState(auth);
    const navigate = useNavigate() 
    async function logout(){
        try {
          await signOut(auth)
          
          navigate('/');
          
        } catch (error) {
          console.log(error);
        }
      
        }  
   console.log(user);
  return (
   <>
    <h1>{user?.displayName}</h1>
    <button onClick={logout}>Logout</button>
    </>
  )
}
export default Home;



