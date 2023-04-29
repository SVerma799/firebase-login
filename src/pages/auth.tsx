import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../../firebase/clientApp";

// Configure FirebaseUI.
const uiConfig = {
  // redirect to / after signin is successful.
  signInSuccessUrl: "/",
  signInOptions: [firebase.app.auth.GithubAithProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pineapple Login</h1>
      <p>Please sign in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
