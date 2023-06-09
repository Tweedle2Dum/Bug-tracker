import { db } from "./firebase";
import { doc,setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth } from "./firebase";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export async function addNewUser(email,username){
    try {
      await setDoc(doc(db,"users",auth.currentUser.uid),{
        User: username,
        Email:email.toLowerCase(),
        newUser:true

     });
     
    }
    
    catch(e) {
        console.error(e);
    }
    
}


export async function checkUserExist(){

}


export async function getUserDetails() {
  const docRef = doc(db,"users",auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()){
    return (docSnap.data());
    

  }
  else{
    console.log("NO SUCH DOCUMENT");
  }

  

  
}


export async function updateUserDetails(role,intro){

  const docRef = doc(db,'users',auth.currentUser.uid);

  await updateDoc(docRef, {
    "role": role,
    "intro": intro,
    "newUser":false
  })


}


export async function getOrganizationDetails() {
  const docRef = doc(db,"organizations",auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()){
    return (docSnap.data());
    

  }
  else{
    console.log("NO SUCH DOCUMENT");
    return Promise.reject(false) 
  }

 
}


export async function addNewOrganization(name,intro){

  const docRef = doc(db,"organizations",auth.currentUser.uid)
  
  
  const obj = {
    Id:uuidv4(),
    Name:name,
    Intro:intro
  }

  try {

    const docSnap = await getDoc(docRef) 


    if(docSnap.exists())
    {
    await updateDoc(doc(db,"organizations",auth.currentUser.uid),{
      
      Organizations:arrayUnion(obj)

   });
  }
  else
  {
    await setDoc(doc(db,"organizations",auth.currentUser.uid),{
      Organizations:arrayUnion(obj)

   });
    
  }
   
  }
  
  catch(e) {
      console.error(e);
  }
  
}

export async function addProfileImg(){

  const storageRef = ref(storage);
  const imageRef = ref(storageRef,`${auth.currentUser.uid}/images`);
  const uploadRef = ref(imageRef,);


}


export async function addOrganizationImg(){

}
