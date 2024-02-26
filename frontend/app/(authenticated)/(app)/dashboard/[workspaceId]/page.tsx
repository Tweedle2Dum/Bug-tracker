"use client";
import useGetBoards from "components/Hooks/API/useGetBoards";
import { BoardNavbar } from "components/UI/App/BoardNavbar/BoardNavbar";
import DragNDropContainer from "components/UI/App/DragNDropContainer/DragNDropContainer";
import { Empty } from "components/UI/App/Empty/Empty";
import Loading from "components/UI/App/LoadingOverlay/LoadingOverlay";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Board } from "types";

type Props = { params: { workspaceId: string } };

export default function page({ params }: Props) {
  const { data: session, status } = useSession();
  console.log(params.workspaceId);
  const { data, isSuccess, isLoading, isError, error } = useGetBoards(
    session as Session,
    params.workspaceId
  );

  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  useEffect(() => {
    // Update selectedBoard when data changes
    if (isSuccess) {
      setSelectedBoard(data.boards[0] ?? null);
    }
  }, [data, isSuccess]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <div>
          {data.boards.length === 0 ? (
            <Empty content={"boards"} />
          ) : (
            <>
              <BoardNavbar
                items={data.boards}
                setBoard={setSelectedBoard}
                selectedBoard={selectedBoard}
              />
              {selectedBoard ? (
                <DragNDropContainer board={selectedBoard} />
              ) : (
                "Select a board to get started"
              )}
            </>
          )}
        </div>
      ) : isError ? (
        <>Some error occured</>
      ) : (
        <>Some error occured</>
      )}
    </>
  );
}
