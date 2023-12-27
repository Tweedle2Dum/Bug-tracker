import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { User } from "types";

async function getUser(session: Session) {
  const response = await fetch("http://localhost:3001/api/v1/user", {
    mode: "cors",
    headers: { Authorization: 'Bearer '+ session.token.idToken as string,'content-type':'application/json' },
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some error occured while fetching user details");
  }
  const data:User = await response.json();
  return data;
}

export default function useGetUser(session: Session) {
  return useQuery({
    queryKey: ["getUser", session],
    queryFn: () => {
      return getUser(session);
    },
  });
}
