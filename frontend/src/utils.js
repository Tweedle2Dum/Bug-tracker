import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, addDoc, collection, getDocs, query, where, collectionGroup } from "firebase/firestore";
import { auth } from "./firebase";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export async function addNewUser(email, username) {
  try {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      User: username,
      Email: email.toLowerCase(),
      newUser: true

    });

  }

  catch (e) {
    console.error(e);
  }

}


export async function checkUserExist() {

}


export async function getUserDetails() {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return (docSnap.data());


  }
  else {
    console.log("NO SUCH DOCUMENT");
  }

}


export async function updateUserDetails(role, intro) {

  const docRef = doc(db, 'users', auth.currentUser.uid);

  await updateDoc(docRef, {
    "role": role,
    "intro": intro,
    "newUser": false
  })


}


export async function getOrganizationDetails() {
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return (docSnap.data());


  }
  else {
    console.log("NO SUCH DOCUMENT");
    return Promise.reject(false)
  }


}


export async function addOrgList(id, name, intro) {

  try {
    await setDoc(doc(db, "organizations", id), {
      Id: id,
      Name: name,
      Intro: intro,

    })


  }
  catch (e) {
    console.log(e)
  }

}


export async function addNewOrganization(name, intro) {
  const Id = uuidv4()
  const docRef = doc(db, "userorganizations", auth.currentUser.uid)

  const obj = {
    Id: Id,
    Name: name,
    Intro: intro
  }

  await addOrgList(Id, name, intro);

  try {

    const docSnap = await getDoc(docRef)


    if (docSnap.exists()) {
      await updateDoc(doc(db, "userorganizations", auth.currentUser.uid), {

        Organizations: arrayUnion(obj)

      });
    }
    else {
      await setDoc(doc(db, "userorganizations", auth.currentUser.uid), {
        Organizations: arrayUnion(obj)

      });

    }

  }

  catch (e) {
    console.error(e);
  }

}

export async function addProfileImg() {

  const storageRef = ref(storage);
  const imageRef = ref(storageRef, `${auth.currentUser.uid}/images`);
  const uploadRef = ref(imageRef,);


}


//to do

export async function addOrganizationImg() {

}

export async function addNewProject(name, orgId, desc) {
const projectColRef = collection(db,"projects");
try {
      await addDoc(projectColRef,{
        name:name,
        orgId:orgId,
        desc: desc ,
        projId:projectColRef.id
      })

}
catch(e){
  console.warn("error  in adding new project")
}

}


async function getProject(id) {
  const projects = []
  const collectionRef = collection(db, "organizations");
  const docRef = doc(collectionRef, id);
  const projectRef = collection(docRef, "projects")
  try {
    const querysnap = await getDocs(projectRef)
    querysnap.forEach((doc) => {
      projects.push(doc.data())
    });

    console.log(projects)
    return projects;
  }
  catch (e) {
    console.log(e)
  }





}



export async function getAllProjects() {
  let projects = [];
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {

    const organizations = docSnap.data();
    const orgIdArray = organizations.Organizations.map(obj => obj.Id)
    console.log(orgIdArray)
    const projectRef = collection(db,"projects");
    try{
      const q =  query(projectRef,where("orgId","in",orgIdArray))
      const querySnapshot =await  getDocs(q);
     
      querySnapshot.forEach((doc)=>{
        const projectData = doc.data();
        console.log(projectData)
        console.log("hi")
        projects.push(projectData)
      })

      return projects;

    }
    catch(e){

      console.warn(e)
      return []
    }
   
  }

 
}

export async function createNewBug(orgId, proj, name, severity, comments) {
try {

  const collectionRef = collection(db,"bugs");
  const docRef = await addDoc(collectionRef,{
    orgId:orgId,
    proj:proj,
    name:name,
    severity:severity,
    comments:comments,
    status:"pending"
  });

  console.log("document added")

   }


catch(e){

  console.warn("some error while writing the issue to the database")

}

}


/* export async function getAllProjectId() {
  const ids = [];

  try {
    const orgs = await getOrganizationDetails()
    const orgId = orgs.Organizations.map((obj) => obj.Id)
    console.log(orgId)

    await Promise.all(
      orgId.map(async (id) => {
        const orgColRef = collection(db, "organizations");
        const orgDoc = doc(orgColRef, id);
        const projectColRef = collection(orgDoc, "projects");
        const querySnap = await getDocs(projectColRef);
        querySnap.forEach((doc) => {
          ids.push(doc.id)
        })

      })
    )


    console.log(ids)
    return ids

  }
  catch (e) {
    console.error("error in getallprojectid")
    throw e 
  }

} */



export async function getAllBugs(organizations) {
  const bugsArray = [];
  const bugRef = collection(db,"bugs");
  const orgId  = organizations.map((org)=>{
    return org.Id
  })

  console.log(orgId)
  try {
    

    console.log(organizations)
    const q = query(bugRef,where("orgId","in",orgId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      const bugData = doc.data();
      console.log(bugData)
      bugsArray.push(bugData)
    })

    return bugsArray

 


    

   

  }
  catch (e) {
    console.error("error in get allbugs")
    console.log(e)
    return []
  }

 




}




