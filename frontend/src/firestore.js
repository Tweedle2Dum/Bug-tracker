import { db } from "./firebase";
import { collection,addDoc,getDocs } from "firebase/firestore";



export async function addNewUser(email,username){
    try {
      const docRef = await addDoc(collection(db,"users"),{
        User: username,
        Email:email.toLowerCase()

     });
     console.log(docRef.id)
    }
    
    catch(e) {
        console.error(e);
    }
    
}