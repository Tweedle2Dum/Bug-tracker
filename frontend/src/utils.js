import { db } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  collectionGroup,
  serverTimestamp,
} from "firebase/firestore";
import { auth } from "./firebase";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export async function addNewUser(email, username) {
  try {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      User: username,
      Email: email.toLowerCase(),
      newUser: true,
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getUserDetails() {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("NO SUCH DOCUMENT");
  }
}

export async function updateUserDetails(role, intro) {
  const docRef = doc(db, "users", auth.currentUser.uid);

  await updateDoc(docRef, {
    role: role,
    intro: intro,
    newUser: false,
  });
}

export async function getOrganizationDetails() {
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  const orgId = [];
  if (docSnap.exists()) {
    const data = docSnap.data().Organizations;
    data.forEach((org) => {
      orgId.push(org.Id);
    });

    const orgRef = collection(db, "organizations");
    const q = query(orgRef, where("Id", "in", orgId));
    try {
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((org) => {
        data.push(org.data());
      });

      console.log(data);

      return data;
    } catch (e) {
      console.log(e);
      return [];
    }
  } else {
    console.log("NO SUCH DOCUMENT");
    return Promise.reject(false);
  }
}

export async function addOrgList(id, name, intro) {
  try {
    await setDoc(doc(db, "organizations", id), {
      Id: id,
      Name: name,
      Intro: intro,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function addNewOrganization(name, intro) {
  const Id = uuidv4();
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);

  const obj = {
    Id: Id,
  };

  await addOrgList(Id, name, intro);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(doc(db, "userorganizations", auth.currentUser.uid), {
        Organizations: arrayUnion(obj),
      });
    } else {
      await setDoc(doc(db, "userorganizations", auth.currentUser.uid), {
        Organizations: arrayUnion(obj),
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export async function useInvite(orgId) {
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);

  try {
    await updateDoc(doc(db, "userorganizations", auth.currentUser.uid), {
      Organizations: arrayUnion(orgId),
    });
  } catch (e) {
    console.log("some error occured while using the invite code");
    console.log(e);
  }
}

export async function addProfileImg() {
  const storageRef = ref(storage);
  const imageRef = ref(storageRef, `${auth.currentUser.uid}/images`);
  const uploadRef = ref(imageRef);
}

//to do

export async function addOrganizationImg() {}

export async function addNewProject(name, orgId, desc) {
  const projectColRef = collection(db, "projects");
  try {
    const docRef = await addDoc(projectColRef, {
      name: name,
      orgId: orgId,
      desc: desc,
      timestamp: serverTimestamp(),
    });

    const projId = docRef.id;
    await updateDoc(docRef, { projId: projId });
  } catch (e) {
    console.warn("error  in adding new project");
    console.log(e);
  }
}

async function getProject(id) {
  const projects = [];
  const collectionRef = collection(db, "organizations");
  const docRef = doc(collectionRef, id);
  const projectRef = collection(docRef, "projects");
  try {
    const querysnap = await getDocs(projectRef);
    querysnap.forEach((doc) => {
      projects.push(doc.data());
    });

    console.log(projects);
    return projects;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllProjects() {
  let projects = [];
  const docRef = doc(db, "userorganizations", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const organizations = docSnap.data();
    const orgIdArray = organizations.Organizations.map((obj) => obj.Id);
    const projectRef = collection(db, "projects");
    try {
      const q = query(projectRef, where("orgId", "in", orgIdArray));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const projectData = doc.data();
        projects.push(projectData);
      });

      return projects;
    } catch (e) {
      console.warn(e);
      return [];
    }
  }
}

export async function createNewBug(
  orgId,
  projdetails,
  name,
  severity,
  comments
) {
  console.log(projdetails);
  const [projId, projName] = projdetails.split(",");
  try {
    const collectionRef = collection(db, "bugs");
    const docRef = await addDoc(collectionRef, {
      orgId: orgId,
      projId: projId,
      projName: projName,
      severity: severity,
      name: name,
      comments: comments,
      status: "pending",
      timestamp: serverTimestamp(),
    });

    console.log("document added");
  } catch (e) {
    console.warn("some error while writing the issue to the database");
    console.log(e);
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
  const bugRef = collection(db, "bugs");
  const orgId = organizations.map((org) => {
    return org.Id;
  });

  console.log(orgId);
  try {
    console.log(organizations);
    const q = query(bugRef, where("orgId", "in", orgId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const bugData = doc.data();
      console.log(bugData);
      bugsArray.push(bugData);
    });

    return bugsArray;
  } catch (e) {
    console.error("error in get allbugs");
    console.log(e);
    return [];
  }
}

export async function updateBugStatus(projId, orgId, bugName, projName) {
  console.log(projId);
  console.log(orgId);

  console.log(bugName);

  console.log(projName);

  let bugRef;
  const bugsRef = collection(db, "bugs");
  const q = query(
    bugsRef,
    where("orgId", "==", orgId),
    where("projId", "==", projId),
    where("name", "==", bugName),
    where("projName", "==", projName)
  );

  try {
    const querySnap = await getDocs(q);
    querySnap.forEach((bugDoc) => {
      bugRef = doc(bugsRef, bugDoc.id);
    });

    if (!bugRef) {
      console.log("bug document now found");
      throw "bug document not found";
    }
    await updateDoc(bugRef, { status: "completed" });
  } catch (e) {
    console.log(e);
    console.log("some error occuered while updating the status of the bug");
  }
}




export async function fetchDataForOrganization() {
  const data = [];
  try {
    // Fetch organization details
    const orgDetails = await getOrganizationDetails();
    const orgId = orgDetails.map((org) => org.Id);
    const bugColRef = collection(db, "bugs");
    const q = query(
      bugColRef,
      where("orgId", "in", orgId),
      where("status", "==", "pending")
    );
    const querySnap = await getDocs(q);

    querySnap.forEach((bug) => {
      data.push(bug.data());
    });

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}



export async function getOrganizationBugs() {
  try {
    const organizations = await getOrganizationDetails();
    const bugsArray = await getAllBugs(organizations);

    const organizationBugs = organizations.map((org) => {
      const organizationBugCount = {
        organizationName: org.Name,
        totalBugs: bugsArray.filter((bug) => bug.orgId === org.Id).length,
      };
      return organizationBugCount;
    });

    return organizationBugs;
  } catch (e) {
    console.error("Error retrieving organization bugs");
    console.log(e);
    return [];
  }
}
