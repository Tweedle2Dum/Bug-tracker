import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";

interface FormData {
  name: string;
  boardId: string;
}

async function postCreateColumn(session: Session, column: FormData) {
  const response = await fetch("http://localhost:3001/api/v1/columns", {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization: `Bearer ${session.token.idToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: column.name,
      boardId: column.boardId,
    }),
  });
  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some Network Error occured while adding a new column");
  }
  const data = response.json();
  return data;
}

export default function usePostColumn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      session,
      column,
    }: {
      session: Session;
      column: FormData;
    }) => {
      return postCreateColumn(session, column);
    },
    onSuccess: (response) => {
      console.log(response);

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: ["getColumns"] }),
      ]);
    },
    onError: (error) => {
      console.log(error);
      return error;
    },
  });
}
