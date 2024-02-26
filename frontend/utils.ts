import { FirebaseError } from "firebase/app";
import { ZodError, z } from "zod";

export function mapAuthCodeToMessage(error: FirebaseError) {
  switch (error.code) {
    case "auth/invalid-password":
      return "Invalid Password";
    case "auth/wrong-password":
      return "Invalid Password";
    case "auth/invalid-email":
      return "Invalid Email";
    case "auth/email-already-exists":
      return "Email is already taken";
    case "auth/internal-error":
      return "Some internal error occured";
    case "auth/email-already-in-use":
      return "Email already exists";
    case "auth/too-many-requests":
      return "Too many failed attempts, reset your password";
    case "auth/user-not-found":
      return "The user is not found"
    case "auth/network-request-failed":
      return "Network error"
  }
}

export function validateSchema<T extends z.ZodTypeAny>(
  schema: T,
  comparator: any
) {
  try {
    const validatedData = schema.parse(comparator);
    console.log("Data is valid", validatedData);
  } catch (error) {
    if (error instanceof ZodError) {
      throw error;
    }
  }
}


export function generateColumnDef(type:string){
  switch (type) {
    case 'Boards':
      return 
      
      break;
  
   
  }
}