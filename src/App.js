import "./App.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { useEffect, useState } from "react";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBPuahElQjBgbLM1E-5GTgxNfWhsDkyJVY",
  authDomain: "lively-marking-322503.firebaseapp.com",
  projectId: "lively-marking-322503",
  storageBucket: "lively-marking-322503.appspot.com",
  messagingSenderId: "661890962613",
  appId: "1:661890962613:web:c2263d823d86d2ac231afc",
  measurementId: "G-9QP37CCVF1",
};
firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/admin",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log(user);
        setIsSignedIn(!!user);
        localStorage.setItem("jwt",isSignedIn)
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>Tutor Helper</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Tutor Helper</h1>
      <p>
        Welcome {firebase.auth().currentUser.displayName}! You are now
        signed-in!
      </p>
    </div>
  );
}

export default App;
