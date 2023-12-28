import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";

interface FormData {
  name: string;
  description: string;
  workspaceId : string ;
}

async function postBoard(session: Session, board: FormData) {
  const response = await fetch("http://localhost:3001/api/v1/board", {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization: `Bearer ${session.token.idToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: board.name,
      description: board.description,
      workspaceId:board.workspaceId
    }),
  });
  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Some Network Error occured while saving board");
  }
  const data = response.json();
  return data;
}

export default function usePostBoard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      session,
      board,
    }: {
      session: Session;
      board: FormData;
    }) => {
      return postBoard(session, board);
    },
    onSuccess: (response) => {
      console.log(response);

      return Promise.all([
        queryClient.invalidateQueries({ queryKey: ["getBoards"] }),
        
      ]);
    },
    onError: (error) => {
      console.log(error);
      return error;
    },
  });
}
