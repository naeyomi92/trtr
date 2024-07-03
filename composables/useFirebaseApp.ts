// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import type { FirebaseApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmlXb6GJRZ2314ukqHEq6uN3w4_Z3SOYM",
    authDomain: "trtr-be160.firebaseapp.com",
    projectId: "trtr-be160",
    storageBucket: "trtr-be160.appspot.com",
    messagingSenderId: "978844002408",
    appId: "1:978844002408:web:6aaa6ac603820a396573dd",
    measurementId: "G-NFECDM4JWW"
};

// Initialize Firebase
export const useFirebaseApp = (): FirebaseApp => {
    let app: FirebaseApp
    if (!getApps().length) {
        app = initializeApp(firebaseConfig)
    } else {
        app = getApps()[0];
    }
    return app
}

export const useFirestore = () => {
    return getFirestore(useFirebaseApp())
}

export const get = async (collectionName: String) => {
    return await getDocs(collection(useFirestore(), collectionName))
}