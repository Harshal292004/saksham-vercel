import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import { User } from '@/lib/models/user.models';

export async function GET() {
  try {
    await connectToDB();
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
