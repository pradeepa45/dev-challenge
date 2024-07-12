import getListOfTheDay from "./api/getListOfTheDay";
import MultiSelect from "./components/MultiSelect";

export default async function Home() {
  const todaysList = await getListOfTheDay();
  return (
    <main className="flex min-h-screen flex-col tablet:items-center justify-center py-2.5 tablet:px-0 px-4">
      <div className="flex flex-col tablet:items-center justify-center bg-black rounded">
        <MultiSelect options={todaysList} selectAll={false} />
      </div>
    </main>
  );
}
