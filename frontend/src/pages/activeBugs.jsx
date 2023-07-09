import React, { useEffect, useState } from "react";
import CreateBug from "../components/Dashboard/ActiveBugs/CreateBug";
import { Box, Spacer } from "@chakra-ui/react";
import {
  getOrganizationDetails,
  getAllProjects,
  getAllBugs,
  updateBugStatus,
} from "../utils";
import BugList from "../components/Dashboard/ActiveBugs/BugList";
export default function activeBugs() {
  const [isLoading, setisLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [organizations, setOrganization] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [addRemove,setaddRemove] = useState(0)


  //useEffect for pulling data of all orgs the user is part of
  useEffect(() => {
    const data = getOrganizationDetails()
      .then((data) => {
        /*         console.log(data);
         */ setOrganization((prevState) => [...data.Organizations]);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  useEffect(() => {
    async function getData() {
      const data = await getAllProjects();
      /*       console.log(data);
       */
      /*     console.log(data.flat(Infinity));
       */ setProjects((prevState) => [...prevState, ...data.flat(Infinity)]);
    }
    getData();
  }, []);

  useEffect(() => {
    async function bugs() {
      const data = await getAllBugs(organizations);
      /*       console.log(data);
       */ setBugs((prevState) => [...data]);
    }

    if (organizations.length !== 0) {
      bugs();
    }
  }, [organizations, addRemove]);

  async function handleStatusUpdate(projId, orgId, bugName, projName) {
    try {
      await updateBugStatus(projId, orgId, bugName, projName);
      setaddRemove((prevState)=>{return prevState + 1})
    } catch (e) {}
  }

  return (
    <>
      <Box>
        <Box display={"flex"}>
          <Box marginLeft={"auto"}>
            <CreateBug organizations={organizations} projects={projects} updateFunction={setaddRemove} />
          </Box>
        </Box>

        <Box>
          <BugList bugsArray={bugs} updatefunction={handleStatusUpdate} />
        </Box>
      </Box>
    </>
  );
}
