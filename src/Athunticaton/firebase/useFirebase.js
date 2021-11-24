import firebaseInitialize from "../../firebase/firebase.init";
import { getAuth,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialize()
const auth = getAuth()
const useFirebase = () =>{
    const [user, setUser] = useState([])
    const singin = () =>{
        const provider= new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(result =>{
           setUser(result.user)
        })
    }
    //log out
    const Logout = ()=>{
            signOut(auth)
            .then(()=>{
                setUser({})
            })
        }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if (user) {
                setUser(user)
              } 
        })
    },[])
    console.log(user)
    return{
        singin,
        user,
        Logout
    }
}
export default useFirebase;