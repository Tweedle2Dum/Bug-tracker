import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";

async function getAllTask(session: Session, columnId: string) {
  const response = await fetch(
    `http://localhost:3001/api/v1/tasks/${columnId}`,
    {
      mode: "cors",
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.token.idToken}`,
        "content-type": "application/json",
      },
    }
  );
  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some Network Error occured while saving task");
  }
  const data = response.json();
  return data;
}

export default function useGetAllTask(session:Session,columnId:string) {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["getColumns",columnId],
    queryFn: () => {
      return getAllTask(session,columnId);
    },
  });
}
