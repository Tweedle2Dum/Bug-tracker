import React from "react";
import BugCard from "./BugCard";
import { Box, Spinner } from "@chakra-ui/react";
import Loading from "../../Loading";

export default function BugList({ bugsArray,updatefunction }) {
 
    return (
      <>
        {console.log(bugsArray)}

        <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={"20px"}>
        {bugsArray.map((bug, index) => {
          /*             {console.log("runs")}
           */
          /* {console.log(bug.status)}
           */ return (
            <BugCard
              key={index}
              name={bug.name}
              proj={bug.projName}
              severity={bug.severity}
              comments={bug.comments}
              status={bug.status}
              orgId={bug.orgId}
              projId={bug.projId}
              updatefunction={updatefunction}
              
            ></BugCard>
          );
        })}
        </Box>
      </>
    );
  }

