import { db } from "./firebaseConfig";
import { collection, add, get, doc, update, deleteDoc } from "@react-native-firebase/firestore";

// create
const addDoc = async(data) => {
    try {
        const docRef = await add(collection(db, "insert_collection"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// read
const getDoc = async() => {
    const querySnapshot = await get(collection(db, "insert_collection"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data}`);
    });
};

// update
const updateDoc = async(id, updatedData) => {
    const docRef = doc(db, "insert_collection", id);
    await update(docRef, updatedData);
};

// delete
const deleteData = async (id) => {
    const docRef = doc(db, "insert_collection", id);
    await deleteDoc(docRef);
};

export { addDoc, getDoc, updateDoc, deleteData };




// // ADD TO APP.JS //

// import { addDoc, getDoc, updateDoc, deleteData } from "./firestoreService";
// import { useEffect } from "react";

// const App = () => {
//     useEffect(() => {
//         // add
//         addDoc({ field1: "value1", field2: "value2"});

//         // read
//         getDoc();

//         //update (replace docId w/ actual document id)
//         updateDoc('docId', { field1: "new_value"});

//         // delete (replace docId w/ actual document id)
//         deleteData('docId');
//     }, []);
// }