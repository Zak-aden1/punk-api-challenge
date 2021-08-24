import React, { createContext, useState, useEffect } from "react";
import firebase from "./../firebase";

export const UserContext = createContext({});

const UserContex = ({children}) => {
    const [user, setUser] = useState('please Sign in');
    // const app = firebase.initializeApp(firebaseConfig);
    // const auth = app.auth();
    // const db = app.firestore()

    const googleProvider = new firebase.auth.GoogleAuthProvider();

     const signIn = () => {
        firebase.auth().signInWithRedirect(googleProvider);
    };
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            setUser(null);
        });
    };

    const getUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    };

    useEffect(() => {
        getUser();
    }, []);
    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContex
