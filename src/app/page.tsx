import Header from "@/components/seactions/Header";
import { createDropdownOptions } from "@/helpers/category";
import { promises as fs } from "fs";

export default async function Home() {
  // company category data
  const categories = createDropdownOptions();

  // load json file
  const logoFileData = await fs.readFile(
    process.cwd() + "/src/data/logos.json",
    "utf8"
  );

  // parse json to array of objects
  const logos = JSON.parse(logoFileData);

  return (
    <main className="container">
      <Header />
      <hr className="border-2" />
    </main>
  );
}
