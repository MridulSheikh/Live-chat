import firebaseInitialize from "../../firebase/firebase.init";
import { getAuth,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialize()
const auth = getAuth()
const useFirebase = () =>{
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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
            setIsLoading(false)
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