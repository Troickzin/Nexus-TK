import { NextResponse } from "next/server";

export async function GET() {
  const test = 10;

  return NextResponse.json({
    Interface: {
      Overlay: {
        Hud: {
          Thirst: {
            Danger_Percentage: 20,
          },
          Hunger: {
            Danger_Percentage: 20,
          },
          Health: {
            Danger_Percentage: 20,
          },
          Stamina: {
            Danger_Percentage: 20,
            Opacity_Timer: 60,
            Always_Visible: false,
          },
        },
      },
    },
  });
}
