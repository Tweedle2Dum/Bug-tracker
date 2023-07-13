import React from "react";
import CreateProject from "../components/Dashboard/Projects/CreateProject";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getOrganizationDetails, getAllProjects } from "../utils";
import ProjectList from "../components/Dashboard/Projects/ProjectList";
import Loading from "../components/Loading";
import ProjectTip from "../components/Dashboard/Projects/ProjectTip";

export default function Projects() {
  const [isLoading, setisLoading] = useState(true);
  const [organizations, setOrganization] = useState([]);
  const [addRemove, setaddRemove] = useState(0);
  const [message, setMessage] = useState(null);

  //useEffect for pulling data of all orgs the user is part of
  useEffect(() => {
    const data = getOrganizationDetails()
      .then((data) => {
        setOrganization((prevState) => [...data]);
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

        if (data != undefined) {
          const result = [...data];
          setProjects((prevState) => [...result]);
          setMessage("Here is a list of all your projects...");
          setisLoading(false);
        } else {
          setMessage("Err...looks like you are not in any projects....");

          setisLoading(false);
        }
      } catch (e) {
        console.log(e);
        setMessage("Err...looks like you are not in any projects....");
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
            <ProjectTip message={message}></ProjectTip>
            <Box marginLeft={"auto"}>
              <CreateProject
                organizations={organizations}
                updaterFunction={setaddRemove}
              />
            </Box>
          </Box>
          <ProjectList projectsArray={projects} />
        </Box>
      </>
    );
  }
}
