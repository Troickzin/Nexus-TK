import connectDB from "@/Services/database/db";
import User from "@/Services/database/models/User";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const name = params.user;
    if (name) {
      const user = await User.findOne({ name });
      if (user) {
        return NextResponse.json(user, {
          status: 200,
        });
      } else {
        return NextResponse.json(
          { error: "User not found" },
          {
            status: 404,
          }
        );
      }
    }
  } catch (err) {
    console.error(err.message);
    return NextResponse.json(
      { error: "Server error" },
      {
        status: 500,
      }
    );
  }
}
