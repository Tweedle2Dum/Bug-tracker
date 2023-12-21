import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "app/api/auth/[...nextauth]/auth";
import Sidebar from "components/UI/App/Sidebar/Sidebar";
import Navbar from "components/UI/App/Navbar/Navbar";

type Props = { children: React.ReactNode };

export default async function layout({ children }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("./auth/login");

  return (
    <>
      <Navbar/>
        <div style={{ display: "flex", minHeight: "100%" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ flexGrow: "1" }}>{children}</div>
    </div>
    </>
  );
}
