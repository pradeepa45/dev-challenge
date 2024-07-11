export default async function addTask({ name }: { name: string }) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_HOST}/add-task`, {
    method: "POST",
    body: JSON.stringify({
      title: name,
      date: new Date().toLocaleDateString(),
    }),
  });
  const data = await resp.json();
  return data;
}
