import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Get portfolio details
export const getPortfolioDetails = () => {
    const detailsDocRef = doc(db, process.env.REACT_APP_DETAILS_COLLECTION, process.env.REACT_APP_DETAILS_DOC);
    return getDoc(detailsDocRef);
};