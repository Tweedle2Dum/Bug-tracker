import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";

interface FormData {
  name: string;
  description: string;
  columnId: string;
}

async function postTask(session: Session, task: FormData) {
  console.log(task);
  const response = await fetch(
    `http://localhost:3001/api/v1/tasks/${task.columnId}`,
    {
      mode: "cors",
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.token.idToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: task.name,
        description: task.description,
        columnId: task.columnId,
      }),
    }
  );
  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some Network Error occured while saving task");
  }
  const data = response.json();
  return data;
}

export default function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ session, task }: { session: Session; task: FormData }) => {
      return postTask(session, task);
    },
    onSuccess: (response,params) => {
      console.log(response);
      queryClient.invalidateQueries({queryKey:["getColumns"]})
      return queryClient.invalidateQueries({ queryKey: ["getTasks",params.task.columnId] });
    },
    onError: (error) => {
      console.log(error);
      return error;
    },
  });
}
