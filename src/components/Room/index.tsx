import React from "react"; //Classic reactjs import

// firebase hooks imported below
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { signInWithGoogle } from "../../services/authGoogleFirebase"




function Room(){
    return ( <section>{user ? <ChatRoom /> : <SignIn />}</section>)
}


function ChatRoom(){
  return (<>
    
    </>)
}

export default Room;

