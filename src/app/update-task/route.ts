import { NextResponse } from "next/server";
import { prismaClient } from "../libs/prisma";
import { Task } from "../types";

export async function POST(req: Request) {
  const { task } = await req.json();
  await prismaClient.$connect();
  const result = await prismaClient.task.update({
    where: {
      id: task.id,
    },
    data: {
      title: task.title,
      completed: task.completed,
    },
  });
  await prismaClient.$disconnect();
  return NextResponse.json({ result });
}
