import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc,setDoc } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo5hYFK-wcaBnVQjLUT-llNmGTFR7d5sk",
    authDomain: "snuskungen-237e1.firebaseapp.com",
    projectId: "snuskungen-237e1",
    storageBucket: "snuskungen-237e1.appspot.com",
    messagingSenderId: "20821570365",
    appId: "1:20821570365:web:5d052140d8eb455deacb54"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
      prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    //user data existst

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            }); 
        } catch (error){
            console.log("error created the user", error.message)
        }
    }

  };