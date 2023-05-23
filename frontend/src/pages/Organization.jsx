import React, { useEffect, useState } from "react";
import CreateOrganization from "../components/Dashboard/Organization/CreateOrganization";
import OrganizationList from "../components/Dashboard/Organization/OrganizationList";
import { addNewOrganization, getOrganizationDetails } from "../utils";
import { Box } from "@chakra-ui/react";
import OrganizationTip from "../components/Dashboard/Organization/OrganizationTip";
import Loading from "../components/Loading";


export default function Organization() {
  const [organization, setOrganization] = useState(null);
  const [message,setMessage] = useState(null)
  const [isLoading,setisLoading] = useState(true);
  useEffect(() => {
    const data = getOrganizationDetails()
      .then((data) => {
        setOrganization(data);
        setMessage("Here is a list of all the organizations that you are part of....")
        setisLoading(false)
      })
      .catch((e) => {
        console.warn(e);
        setMessage("Errr.... looks like you are not part of any organizations.")
        setisLoading(false)
      });
  }, []);


if(isLoading){
  return <><Loading/></>
}
else

{
  return (

    <Box>
      {console.log(organization)}
      <Box display={"flex"} justifyContent={"space-between"} >
      <OrganizationTip message= {message} />
      <CreateOrganization />
      </Box>
      <OrganizationList name={organization.Organization} intro = {organization.Intro}   />
      </Box>
  );

}

 
}
