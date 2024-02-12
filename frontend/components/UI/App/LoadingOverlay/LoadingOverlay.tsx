"use client";
import React from "react";
import { LoadingOverlay, Button, Group, Box } from "@mantine/core";
type Props = {};

function Loading({}: Props) {

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={true}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "pink", type: "bars" }}
        />
        {/* ...other content */}
      </Box>
    </>
  );
}

export default Loading;
