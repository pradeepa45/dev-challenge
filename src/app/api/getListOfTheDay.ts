import moment from "moment";

export default async function getListOfTheDay() {
  const date = moment().format(`DD/MM/YYYY`);
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
