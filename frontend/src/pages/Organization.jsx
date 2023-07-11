import React, { useEffect, useState } from "react";
import CreateOrganization from "../components/Dashboard/Organization/CreateOrganization";
import OrganizationList from "../components/Dashboard/Organization/OrganizationList";
import { addNewOrganization, getOrganizationDetails } from "../utils";
import { Box } from "@chakra-ui/react";
import OrganizationTip from "../components/Dashboard/Organization/OrganizationTip";
import Loading from "../components/Loading";

import CreateInviteLink from "../components/Dashboard/Organization/CreateInviteLink";
import UseInviteCode from "../components/Dashboard/Organization/UseInviteCode";

export default function Organization() {
  const [organization, setOrganization] = useState([]);
  const [addRemove,setaddRemove] = useState(0);
  const [message,setMessage] = useState(null)
  const [isLoading,setisLoading] = useState(true);
  
  
  useEffect(() => {
    const data = getOrganizationDetails()
      .then((data) => {
        console.log(data)
        setOrganization(prevState => [...data]);
        setMessage("Here is a list of all the organizations that you are part of....")
        setisLoading(false)
      })
      .catch((e) => {
        console.warn(e);
        setMessage("Errr.... looks like you are not part of any organizations.")
        setisLoading(false)
      });
  }, [addRemove]);






if(isLoading){
  return <><Loading/></>
}
else

{
  return (

    <Box>
{/*       {console.log(organization)}
 */}      <Box display={"flex"} justifyContent={"space-between"}  gap={"20px"}>
      <OrganizationTip message= {message} />
      <CreateInviteLink data = {organization}/>
      <UseInviteCode/>
      <CreateOrganization updateFunction={setaddRemove} />
      </Box >
      <Box>
      <OrganizationList data={organization} />

      </Box>
      </Box>
  );

}

 
}
