import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { Board, Columns, User } from "types";

async function getColumns(session: Session,boardID:string):Promise<Columns> {
  const response = await fetch(`http://localhost:3001/api/v1/columns/${boardID}`, {
    mode: "cors",
    headers: { Authorization: 'Bearer '+ session.token.idToken as string,'content-type':'application/json' },
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some error occured while fetching columns");
  }
  const data = await response.json();
  return data;
}

export default function useGetColumns(session: Session,boardID:string) {
  return useQuery({
    queryKey: ["getColumns"],
    queryFn: () => {
      return getColumns(session,boardID);
    },
  });
}
