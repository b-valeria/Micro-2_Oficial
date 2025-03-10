
import {createContext,useState,useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const UserContext=createContext(null);
import {app} from '../firebase'

const auth = getAuth(app);


const UserProvider=({children}) =>{

    const [user,setUser]=useState('')
    const [email,setEmail]= useState('')
    const [loggedIn,setLoggedIn]=useState(false)


    useEffect(() =>{

        const unsubscribe = onAuthStateChanged(auth,   async (userConnected)=>{
            if(userConnected){
                setUser(userConnected.uid)
                setEmail(userConnected.email)
                setLoggedIn(true)
            }
            else{
                setUser(null)
                setEmail('')
                setLoggedIn(false)
            }



        }    )



        return () => unsubscribe();

    },[]   )




return( <UserContext value={{user,setUser,email,setEmail,loggedIn}}>  {children}  </UserContext>  )



}


export {UserProvider,UserContext}