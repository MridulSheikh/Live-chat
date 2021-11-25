import firebaseInitialize from "../../firebase/firebase.init";
import { getAuth,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialize()
const auth = getAuth()
const useFirebase = () =>{
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const singin = () =>{
        setIsLoading(true)
        const provider= new GoogleAuthProvider()
        return  signInWithPopup(auth, provider)
        .finally(()=>setIsLoading(false))
    }
    //log out
    const Logout = ()=>{
            signOut(auth)
            .then(()=>{
                setUser({})
            })
            .finally(()=> setIsLoading(false))
        }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if (user) {
                setUser(user)
              } 
              setIsLoading(false)
        })
    },[])
     //user information save to database
     const saveUser = (email,name) =>{
        const user = {email, displayName: name}
        fetch('http://localhost:5000/users',{
          method: "PUT", 
          headers: {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(user)
        })
        .then()
     }
    console.log(user)
    return{
        singin,
        user,
        Logout,
        saveUser,
        isLoading
    }
}
export default useFirebase;