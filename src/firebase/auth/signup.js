import firebaseApp from "../config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const signUp = async (values) => {

    const { email, password } = values;
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return { status: 200, data: response }
    } catch (error) {
        return { status: 500, message: error, message }
    }
}