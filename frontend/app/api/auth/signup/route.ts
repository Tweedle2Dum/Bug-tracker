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
