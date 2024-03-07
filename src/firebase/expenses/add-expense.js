import firebaseApp from "../config";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export const addExpense = async (values) => {
    try {
        console.log(values, "values")
        const response = await addDoc(collection(firestore, "expensesData"), values);
        console.log(response, "response in addExpense")

        return { status: 200, data: response }
    } catch (error) {
        return { status: 500, message: error.message }
    }
}