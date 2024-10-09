
import { useState } from "react";
import app from "../../Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";




const Login = () => {
      const [user,setUser] = useState(null);
      const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
     const handleGoogleSignIn = () => {
      signInWithPopup(auth,provider)
      .then(result =>{
            const loggedIdUser = result.user;
            console.log(loggedIdUser);
            setUser(loggedIdUser);

      })
      .catch(error =>{
            console.log(error)
      })
     
     }

     const handleSignOut = () =>{
      signOut(auth)
      .then(result =>{
            console.log(result)
            setUser(null)
      })
      .catch(error =>{
            console.log(nai)
      })

     }
     
     
      return (
            <div>
                 { user ?
                  <button onClick={handleSignOut} >Sign Out</button>:
                 <button onClick={handleGoogleSignIn} >Google login</button>}
            
            {  user &&  <div>
                 <h3>User : {user.displayName} </h3>
                 <p>Email : {user.email
                 }</p>
                 <p>
photoURL
: {user.
photoURL
} </p>
            </div>}
            </div>
      );
};

export default Login;