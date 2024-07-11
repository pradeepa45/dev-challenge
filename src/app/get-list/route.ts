import { NextResponse } from "next/server";
import { prismaClient } from "../libs/prisma";

export async function POST(req: Request) {
  const { date } = await req.json();
  await prismaClient.$connect();
  let result = await prismaClient.task.findMany({
    where: {
      date,
    },
  });
  if (!result) {
    await prismaClient.day.create({
      data: {
        date,
        allDone: false,
      },
    });
  }
  await prismaClient.$disconnect();
  return NextResponse.json({ result });
}
