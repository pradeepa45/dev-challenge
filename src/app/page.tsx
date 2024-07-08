import MultiSelect from "./components/MultiSelect";
import { defaultOptions } from "./constants/selectOptions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col tablet:items-center justify-center py-2.5 tablet:px-0 px-4">
      <div className="flex flex-col tablet:items-center justify-center">
        <MultiSelect options={defaultOptions} selectAll={false} />
      </div>
    </main>
  );
}
