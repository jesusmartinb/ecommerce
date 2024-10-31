import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASAyailzniwaJpGwJ9105fcw8kPud5uUw",
  authDomain: "ecommerce-ch-react-pf.firebaseapp.com",
  projectId: "ecommerce-ch-react-pf",
  storageBucket: "ecommerce-ch-react-pf.appspot.com",
  messagingSenderId: "597084827519",
  appId: "1:597084827519:web:954d4a2e7f84c9dacbf44a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;