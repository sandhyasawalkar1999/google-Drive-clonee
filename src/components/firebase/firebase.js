// Import the specific Firebase functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB5mtMk0Mxt9kPH2IPTDZS3ZRIgUmHVKcQ",
//     authDomain: "drive-clone-b8a21.firebaseapp.com",
//     projectId: "drive-clone-b8a21",
//     storageBucket: "drive-clone-b8a21.appspot.com",
//     messagingSenderId: "177298752801",
//     appId: "1:177298752801:web:a6670c699a1d61647b2a60",
//     measurementId: "G-2NFT6W9VZJ"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCbe0kyisXNjHPPKOFpK_GHilDcbza4gG8",
    authDomain: "drive-clone-5f823.firebaseapp.com",
    projectId: "drive-clone-5f823",
    storageBucket: "drive-clone-5f823.firebasestorage.app",
    messagingSenderId: "67867236537",
    appId: "1:67867236537:web:721efd61fd73b845f7e368"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
