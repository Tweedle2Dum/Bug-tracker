import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "app/api/auth/[...nextauth]/auth";
import Sidebar from "components/UI/App/Sidebar/Sidebar";
import Navbar from "components/UI/App/Navbar/Navbar";
import SessionProvider from "components/Providers/SessionProvider";
import QueryProvider from "components/Providers/QueryProvider";

type Props = { children: React.ReactNode };

export default async function layout({ children }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("./auth/login");

  return (
    <>
      <SessionProvider session={session}>
        <QueryProvider>
          <Navbar />
          <div style={{ display: "flex", minHeight: "100%", maxWidth:'95%' }}>
            <div>
              <Sidebar />
            </div>
            <div style={{maxWidth:'100%'}}>{children}</div>
          </div>
        </QueryProvider>
      </SessionProvider>
    </>
  );
}
