import React from "react";
import CreateProject from "../components/Dashboard/Projects/CreateProject";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getOrganizationDetails, getAllProjects } from "../utils";
import ProjectList from "../components/Dashboard/Projects/ProjectList";
import Loading from "../components/Loading";

export default function Projects() {
  const [isLoading, setisLoading] = useState(true);
  const [organizations, setOrganization] = useState([]);
  const [addRemove,setaddRemove] = useState(0);


  //useEffect for pulling data of all orgs the user is part of
  useEffect(() => {
    const data = getOrganizationDetails()
      .then((data) => {
        setOrganization((prevState) => [...data.Organizations]);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function test() {
      try {
        const data = await getAllProjects();
        /*       console.log(data);
         */ const result = [...data];
        setProjects((prevState) => [...result]);
        setisLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    test();
  }, [addRemove]);




  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Box>
          <Box display={"flex"}>
            <Box marginLeft={"auto"}>
              <CreateProject organizations={organizations} updaterFunction={setaddRemove} />
            </Box>
          </Box>
          <ProjectList projectsArray={projects} />
        </Box>
      </>
    );
  }
}
