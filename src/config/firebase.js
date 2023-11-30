import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrJxaTNQLR7vIG6uIxIrFnk2R0e8col04",
    authDomain: "form-validation-b449c.firebaseapp.com",
    projectId: "form-validation-b449c",
    storageBucket: "form-validation-b449c.appspot.com",
    messagingSenderId: "1071737788258",
    appId: "1:1071737788258:web:e14075abb84008b1b6fe3b"  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);