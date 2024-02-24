"use client";
import { Flex, LoadingOverlay } from "@mantine/core";
import useGetUser from "components/Hooks/API/useGetUser";
import { Empty } from "components/UI/App/Empty/Empty";
import { GradientCard } from "components/UI/App/GradientCard/GradientCard";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";
import { Loader } from "@mantine/core";
type Props = {};

export default function page({}: Props) {
  const { data: session, status } = useSession();
  const { data, isError, isLoading, isSuccess } = useGetUser(
    session as Session
  );

  return (
    <div style={{ height: "100%" }}>
      {isLoading ? (
        <Flex my={'50%'} justify={"center"} align={"center"}>
          <Loader />
        </Flex>
      ) : (
        <Flex wrap={"wrap"} gap={"20px"}>
          {data?.workspaces.length ? (
            data.workspaces.map((items, index) => {
              return (
                <>
                  {" "}
                  <GradientCard key={index} {...items} />
                </>
              );
            })
          ) : (
            <Empty content="workspaces" />
          )}
        </Flex>
      )}
    </div>
  );
}
