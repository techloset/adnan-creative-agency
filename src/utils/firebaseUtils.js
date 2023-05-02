import { firebaseAuth, firebaseDb } from '../config/firebase'
import { getDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from 'react';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const firebaseSignup = async ({
    email,
    password,
    username
}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)

        const userRef = doc(firebaseDb, 'users', userCredential.user.uid)
        await setDoc(userRef, { email, password })
        return (userCredential.user)
    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}

const firebaseSignin = async ({
    email,
    password,

}) => {
    try {
        const login = await signInWithEmailAndPassword(firebaseAuth, email, password)
        if (login.user?.user.uid) {
            const docRef = doc(firebaseDb, 'users', login.user.uid)
            alert('trigger')
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data()
            } else {
                console.log('user not found');
            }
        }

    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}
const firebaseSignOut = async ({

}) => {
    try {
        const logout = await signOut(firebaseAuth,)
        console.log('logout', logout);
        return logout
    } catch (error) {
        console.log('error', error);
        throw error
    }
}
export {
    firebaseSignup,
    firebaseSignin,
    firebaseSignOut
}

