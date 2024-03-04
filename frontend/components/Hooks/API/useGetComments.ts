import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { Board, CommentResponse, User } from "types";

async function getComments(session: Session,taskId:string):Promise<CommentResponse>  {
  const response = await fetch(`http://localhost:3001/api/v1/comments/${taskId}`, {
    mode: "cors",
    headers: { Authorization: 'Bearer '+ session.token.idToken as string,'content-type':'application/json' },
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some error occured while fetching user details");
  }
  const data = await response.json();
  return data;
}

export default function useGetComments(session: Session,taskId:string) {
  return useQuery({
    queryKey: ["getComments", session,taskId],
    queryFn: () => {
      return getComments(session,taskId);
    },
  });
}
