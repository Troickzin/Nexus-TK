import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function GET(req, { params }) {
  const { id } = await params;

  console.log(JSON.parse(id[1]));
  return NextResponse.json({ sla: "ok" });
}
