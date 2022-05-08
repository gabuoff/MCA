import React from 'react';
import { auth } from './services/firebase'
import { SignIn, ChatRoom } from './components/signInComponent'

function App() {

  return (
 <div className="app">
   <header>

   </header>
    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>
 </div>
  )
}

export default App
