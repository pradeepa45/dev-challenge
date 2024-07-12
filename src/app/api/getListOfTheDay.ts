import { date } from "../libs/date";

export default async function getListOfTheDay() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/get-list`, {
    method: "POST",
    body: JSON.stringify({
      date,
    }),
    cache: "no-store",
  });
  const { result } = await response.json();
  return result;
}
