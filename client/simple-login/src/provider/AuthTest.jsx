// import app from "./../firebase/Firebase.config";

// import {
//   createUserWithEmailAndPassword,
//   // signInWithPopup,
//   signOut,
//   // googleProvider,
// } from "firebase/auth";
// import { useState } from "react";
// const auth = app
//  const AuthTest = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//     console.log(auth?.currentUser?.email);
//     console.log(auth?.currentUser?.photoURL);
//   const signIn = async () => {
//     try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     } catch (err){
//       console.error(err);
//     }
//   };
//   // const signInWithGoogle = async () => {
//   //   try {
//   //   await signInWithPopup(auth,googleProvider);
//   //   } catch (err){
//   //     console.error(err);
//   //   }
//   // };
//   const logOut = async () => {
//     try {
//     await signOut(auth);
//     } catch (err){
//       console.error(err);
//     }
//   };
//   return (
//     <div>
//       <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password.."
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={signIn}> Signin</button>
//       {/* <button onClick={signInWithGoogle}> Signin with google</button> */}
//       <button onClick={logOut}> logOut</button>
//     </div>
//   );
// };

// export default AuthTest;