import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";

interface FormData {
  description: string;
  taskId: string;
}

async function postComment(session: Session, comment: FormData) {
  console.log(comment);
  const response = await fetch(
    `http://localhost:3001/api/v1/comments/${comment.taskId}`,
    {
      mode: "cors",
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.token.idToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        description: comment.description,
        taskId: comment.taskId,
      }),
    }
  );
  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some Network Error occured while saving comment");
  }
  const data = response.json();
  return data;
}

export default function useCreateComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ session, comment }: { session: Session; comment: FormData }) => {
      return postComment(session, comment);
    },
    onSuccess: (response,params) => {
      console.log(response);
      queryClient.invalidateQueries({queryKey:["getComments"]})
      return queryClient.invalidateQueries({ queryKey: ["getTasks",params.comment.taskId] });
    },
    onError: (error) => {
      console.log(error);
      return error;
    },
  });
}
