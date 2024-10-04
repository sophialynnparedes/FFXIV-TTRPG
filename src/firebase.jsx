import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ffxiv-f220f.firebaseapp.com",
    projectId: "ffxiv-f220f",
    storageBucket: "ffxiv-f220f.appspot.com",
    messagingSenderId: "1023743808342",
    appId: "1:1023743808342:web:eb0c7424eea6696bd4bcf7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        await setDoc(
            doc(db, "users", user.uid),
            { uid: user.uid },
            { merge: true }
        );
    } catch (error) {
        alert(error.message);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        alert(error.message);
    }
};
