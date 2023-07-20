import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [adminRouteLoading, setAdminRouteLoading] = useState(true);
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // Auth
  const auth = getAuth();
  // providers
  const googleProvider = new GoogleAuthProvider();

  // get and set name,email and password
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // register new user
  const registerNewUsers = (e) => {
    // e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        setUser(result.user);
        saveUser(email, name, "POST");
        veryfyEmail();
        updateBasicInfo();

        setError("");
        setMessage("Registration successful");
      })
      .catch((error) => {
        setMessage("");
        setError("register failed");
      });

    // update name
    const updateBasicInfo = () => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          const newUser = { ...user, displayName: name, email: email };
          setUser(newUser);
        })
        .catch((error) => {});
    };
    // veryfyEmail
    const veryfyEmail = () => {
      sendEmailVerification(auth.currentUser).then(() => {});
    };
  };

  // loginProcess
  const loginProcess = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //     login with google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // get user all time
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  useEffect(() => {
    setAdminRouteLoading(true)
    
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminRouteLoading(false);
      })
      
  }, [user.email]);

  // logout function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUser = (email, displayName, method) => {
    const user = { email: email, displayName: displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    handleEmail,
    handlePassword,
    handleName,
    loginProcess,
    token,
    ///kk
    signInUsingGoogle,
    registerNewUsers,
    user,
    setUser,
    isLoading,
    setIsLoading,
    logOut,
    //kkk
    message,
    setMessage,
    error,
    setError,
    saveUser,
    admin,
    adminRouteLoading,
    setAdminRouteLoading
  };
};

export default useFirebase;
