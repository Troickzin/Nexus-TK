import connectDB from "@/Services/database/db";
import User from "@/Services/database/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(req) {
  await connectDB();

  try {
    const users = await User.find();
    return NextResponse.json(users, {
      status: 200,
    });
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

export async function POST(req) {
  await connectDB();
  const { name, email, password } = await req.json();

  console.log(name, email, password);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = new User({ name, email, password: hashedPassword });
    await user.save();
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
