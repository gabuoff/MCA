import React from "react"; //Classic reactjs import

// firebase hooks imported below
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"

// interface UserDocument {
//   createdAt: Date;
//   photoURL: string;
//   text: string;
//   uid: string;
// }

const [user] = useAuthState(auth);

function Room(){
    return ( <section>{user ? <ChatRoom /> : <SignIn />}</section>)
}

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
function ChatRoom(){

    const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });  

  const querySnapshot = await getDocs(collection(db, "messages"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


  return (<>
    
    </>)
}

export default Room;

