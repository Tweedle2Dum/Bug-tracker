import React from "react";
import { getServerSession } from "next-auth";

type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
  return <>{children}</>;
}
