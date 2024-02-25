import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { Board, User } from "types";

async function getBoards(session: Session,boardID:string) {
  const response = await fetch(`http://localhost:3001/api/v1/columns/${boardID}`, {
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

export default function useGetBoards(session: Session,boardID:string) {
  return useQuery({
    queryKey: ["getColumn", session,boardID],
    queryFn: () => {
      return getBoards(session,boardID);
    },
  });
}
