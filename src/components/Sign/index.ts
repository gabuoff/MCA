import React from 'react';
// firebase hooks imported below
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { signInWithGoogle } from "../../services/authGoogleFirebase"


function SignIn(){

    
    return (
        <>
            <button onClick={signInWithGoogle}>Sign In</button>
        </>
    )
}

function SignOut(){
  return auth.currentUser && (
    <>
    <button onClick={() => {auth.signOut()}}>Sign Out</button>
</>
  )
}