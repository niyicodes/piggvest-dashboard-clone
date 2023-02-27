import { initializeApp } from "firebase/app";
import {
 createUserWithEmailAndPassword,
 getAuth,
 signInWithEmailAndPassword,
 signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyC-ozoJleqbFccT8dOg9uwYzWVTr5ABN1w",
 authDomain: "piggyvest-clone.firebaseapp.com",
 projectId: "piggyvest-clone",
 storageBucket: "piggyvest-clone.appspot.com",
 messagingSenderId: "132449582671",
 appId: "1:132449582671:web:996f8f7f7bfde66fa7743a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
 try {
  await signInWithEmailAndPassword(auth, email, password);
 } catch (err) {
  console.error(err);
  alert(err.message);
 }
};

const registerWithEmailAndPassword = async (
 email,
 password,
 phone,
 referer,
 name,
 about
) => {
 try {
  const res = await createUserWithEmailAndPassword(auth, email, password, name);
  const user = res.user;
  await addDoc(collection(db, "users"), {
   uid: user.uid,
   name,
   authProvider: "local",
   email,
   phone,
   referer,
   about,
  });
 } catch (err) {
  alert("Please fill in the fields properly and try again");
 }
};

const logout = () => {
 signOut(auth);
};

export {
 auth,
 db,
 logInWithEmailAndPassword,
 registerWithEmailAndPassword,
 logout,
};
