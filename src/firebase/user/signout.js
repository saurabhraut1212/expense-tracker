import firebaseApp from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const signOutUser = async () => {
    try {
        const user = await signOut(auth);
        return { status: 200, data: user }
    } catch (error) {
        return { status: 500, message: error.message }

    }
};
