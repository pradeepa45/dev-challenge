import { Task } from "../types";

export default async function updateTask({ task }: { task: Task }) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_HOST}/update-task`, {
    method: "POST",
    body: JSON.stringify({ task }),
  });
}
