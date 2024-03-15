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
import { Box, Button, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Modals from "components/UI/App/Modal/Modal";
type Props = { params: { workspaceId: string } };

export default function page({ params }: Props) {
  const { data: session, status } = useSession();
  console.log(params.workspaceId);
  const { data, isSuccess, isLoading, isError, error } = useGetBoards(
    session as Session,
    params.workspaceId
  );


  const [opened, { open, close }] = useDisclosure(false);


  function addList() {
    open();
  }

  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  useEffect(() => {
    // Update selectedBoard when data changes
    if (isSuccess) {
      setSelectedBoard(data.boards[0] ?? null);
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <>
          {data.boards.length === 0 ? (
            <Empty content={"boards"} />
          ) : (
            <>
              <BoardNavbar
                items={data.boards}
                setBoard={setSelectedBoard}
                selectedBoard={selectedBoard}
              />
              <Flex>
                {selectedBoard ? (
                  <>
                  <DragNDropContainer board={selectedBoard} />
                  <Modals
                    opened={opened}
                    open={open}
                    close={close}
                    contentType="Column"
                    boardID={selectedBoard.id}
                  />

                  </>
                  
                ) : (
                  "Select a board to get started"
                )}


               {/*  <Box>
                <Button variant="fill" onClick={addList} style={{ margin: "0 10px" }}>
            Add Column
          </Button>
                </Box> */}
              </Flex>

            </>
          )}
        </>
      ) : isError ? (
        <>Some error occured</>
      ) : (
        <>Some error occured</>
      )}
    </>
  );
}
