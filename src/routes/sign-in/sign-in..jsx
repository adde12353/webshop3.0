import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firesbase.utils";

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    
    return ( 
        <div>
            <h2>Sign in</h2>
        <button
        onClick={logGoogleUser}>
            sign in with google
        </button>
        </div>
     );
}
 
export default SignIn;