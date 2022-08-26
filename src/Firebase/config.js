import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

    apiKey: "AIzaSyCkjfCVbXs8TUo2SWKdlTWRKAK99m423vk",

    authDomain: "cursoreactlr.firebaseapp.com",

    projectId: "cursoreactlr",

    storageBucket: "cursoreactlr.appspot.com",

    messagingSenderId: "354983236698",

    appId: "1:354983236698:web:a151e4527401eaa80cf463",

    measurementId: "G-E8W9Z2R71K"

};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCkjfCVbXs8TUo2SWKdlTWRKAK99m423vk",
//     authDomain: "cursoreactlr.firebaseapp.com",
//     projectId: "cursoreactlr",
//     storageBucket: "cursoreactlr.appspot.com",
//     messagingSenderId: "354983236698",
//     appId: "1:354983236698:web:a151e4527401eaa80cf463",
//     measurementId: "G-E8W9Z2R71K"
// };

// const app = initializeApp(firebaseConfig);