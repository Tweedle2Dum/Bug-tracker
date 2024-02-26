import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";

interface FormData {
  name: string;
  description: string;
}

async function postTask(session: Session, workspace: FormData) {
  const response = await fetch("http://localhost:3001/api/v1/workspace", {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization: `Bearer ${session.token.idToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: workspace.name,
      description: workspace.description,
    }),
  });
  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some Network Error occured while saving workspace");
  }
  const data = response.json();
  return data;
}

export default function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      session,
      workspace,
    }: {
      session: Session;
      workspace: FormData;
    }) => {
      return postTask(session, workspace);
    },
    onSuccess: (response) => {
      console.log(response);

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: ["getWorkspace"] }),
        queryClient.invalidateQueries({ queryKey: ["getUser"] }),
      ]);
    },
    onError: (error) => {
      console.log(error);
      return error;
    },
  });
}
