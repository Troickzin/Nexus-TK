import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  const settingsPath = path.join(
    process.cwd(),
    "public",
    "data",
    "settings.json"
  );
  const settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
  const showcasePath = path.join(
    process.cwd(),
    "public",
    "images",
    "showcase_items",
    "versions",
    settings.current_version,
    "items"
  );
  const files = fs.readdirSync(showcasePath);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  const imageUrl = `/images/showcase_items/versions/${settings.current_version}/items/${randomFile}`;

  return NextResponse.json({
    imageUrl: imageUrl,
    version: settings.current_version,
  });
}
