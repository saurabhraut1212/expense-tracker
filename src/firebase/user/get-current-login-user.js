import firebaseApp from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const getCurrentLoginUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            unsubscribe();
            if (currentUser) {
                resolve(currentUser);
            } else {
                resolve(null);
            }
        }, (error) => {
            reject(error);
        });
    });
};
