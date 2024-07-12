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
    const dailytasks = await prismaClient.task.findMany({
      where: {
        daily: true,
      },
    });
    result = dailytasks.map((task) => {
      return {
        ...task,
        date,
      };
    });
  }
  await prismaClient.$disconnect();
  return NextResponse.json({ result });
}
