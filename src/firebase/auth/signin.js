import firebaseApp from "../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const signIn = async (values) => {

    const { email, password } = values;
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return { status: 200, data: response }
    } catch (error) {
        return { status: 500, message: error, message }
    }
}