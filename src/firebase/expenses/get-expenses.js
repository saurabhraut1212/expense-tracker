import firebaseApp from "../config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export const getExpenses = async () => {
    try {
        const documents = [];
        const querySnapShot = await getDocs(collection(firestore, "expensesData"));
        querySnapShot.forEach((doc) => {
            documents.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { status: 200, data: documents };
    } catch (error) {
        return { status: 500, message: error.message }
    }
}