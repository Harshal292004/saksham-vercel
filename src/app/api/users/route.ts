// app/api/users/route.ts
import { NextResponse } from "next/server";
import { User } from "@/lib/models/user.models";
import { connectToDB } from "@/lib/db";
export async function POST(request: Request) {
  try {
    await connectToDB();
    
    const body = await request.json();
    
    // Validate required fields
    if (!body.clerkId || !body.email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    

    const newUser = await User.create({
      clerkId: body.clerkId,
      email_addresses: body.email_addresses,
      username:body.usernamem,
      first_name: body.first_name,
      role:"individual"
    });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Internal Server Error",
        // Include more details in development
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      },
      { status: 500 }
    );
  }
}