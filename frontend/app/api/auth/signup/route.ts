import { mapAuthCodeToMessage } from "utils";
import { FirebaseError } from "firebase/app";
import { auth } from "app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse, NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  try {
    const firebaseRes = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const dbRes = await fetch("http://localhost:3001/api/v1/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({username:data.username,email:data.email})
    });
    const dbData = await dbRes.json();   
     if (dbRes.ok) {
      return NextResponse.json({ success: "Account created successfully" }, { status: 200 });
    } else {
      // Handle backend Go service error
      console.error("Backend Go service error:", dbData.error);
      return NextResponse.json({ error: "Some internal server error occurred" }, { status: 500 });
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
      const errorMessage = mapAuthCodeToMessage(error) as string;
      return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
    console.log(error);
    return NextResponse.json(
      { error: "Some internal server error occured" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: "Account created successfully" },
    { status: 200 }
  );
}
