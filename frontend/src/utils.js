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


export async function addOrganizationImg() {

}

export async function addNewProject(name, orgId, desc) {
  const docRef = doc(db, 'organizations', orgId);
  const colRef = collection(docRef, "projects")
  try {
    await addDoc(colRef, {
      name: name,
      desc: desc,
      addedby: auth.currentUser.uid

    })



  }
  catch (e) {
    console.error(e)
    return Promise.reject(false)
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



  /*  getDocs(projectRef)
   .then((querysnap)=>{
     querysnap.forEach((doc)=>{
       projects.push(doc.data())
     })
   }).then(()=>{
     console.log(projects)
     
 
   })
   .catch((e)=>{
 
     console.log(e)
     
   })
   return projects; */

}



export async function getAllProjects() {
  let projects = [];
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {

    const organizations = docSnap.data();
    const orgId = organizations.Organizations.map(obj => obj.Id)
    console.log(orgId)
    const promises = orgId.map(id => getProject(id));
    const p = await Promise.all(promises)
      .then(results => {
        projects.push(...results)
        console.log(projects)
      })
      .catch(error => {
        console.error("some error occured in fetching list of projects")
      })
  }

  return projects;
}

export async function createNewBug(orgId, proj, name, severity, comments) {
  const docRef = doc(db, "organizations", orgId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const organizations = docSnap.data();
    console.log(organizations)
    const projectRef = collection(docRef, "projects")
    const q = query(projectRef, where("name", "==", proj))
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      const parentDocument = doc.ref;
      console.log(parentDocument)
      const bugsRef = collection(parentDocument, "bugs");
      addDoc(bugsRef, {
        orgId: orgId,
        proj: proj,
        name: name,
        severity: severity,
        comments: comments
      })
    })

  }

}


export async function getAllProjectId() {
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

}



export async function getAllBugs() {
  try {
    const projectIds = await getAllProjectId();
    console.log(projectIds)
    console.log(projectIds.length)
    const queryPromises = projectIds.map(async (projectId) => {
      console.log('Project ID:', projectId);
      const querySnapshot = await db
        .collectionGroup('projects')
        .where('__name__', '==', projectId)
        .get();

      return querySnapshot;
    });
    console.log(queryPromises)
    const querySnapshots = await Promise.all(queryPromises);


    querySnapshots.forEach((querySnapshot) => {
      console.log('Query Snapshot:', querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log('Project Document:', doc.data());
      });
    });

  }
  catch (e) {
    console.error("error in get allbugs")
    console.log(e)
  }





}




