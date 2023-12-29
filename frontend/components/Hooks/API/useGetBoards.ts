import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { Board, User } from "types";

async function getBoards(session: Session,workspaceId:string) {
  const response = await fetch(`http://localhost:3001/api/v1/board/${workspaceId}`, {
    mode: "cors",
    headers: { Authorization: 'Bearer '+ session.token.idToken as string,'content-type':'application/json' },
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some error occured while fetching user details");
  }
  const data:{boards:Board[]} = await response.json();
  return data;
}

export default function useGetBoards(session: Session,workspaceId:string) {
  return useQuery({
    queryKey: ["getUser", session,workspaceId],
    queryFn: () => {
      return getBoards(session,workspaceId);
    },
  });
}
