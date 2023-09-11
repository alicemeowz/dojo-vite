import './App.css'
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';


const app = initializeApp();

const auth = getAuth()

onAuthStateChanged(auth, user => {
  console.log({ user });
})

signInAnonymously(auth);

const App = () => {
  return (
    <>
      <h1>Home Screen</h1>
    </>
  )
}

export default App
