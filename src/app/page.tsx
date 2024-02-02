import Cards from "@/components/sections/Cards";
import Header from "@/components/sections/Header";
import { createDropdownOptions } from "@/helpers/category";
import { promises as fs } from "fs";

export default async function Home() {
  // company category data
  const categories = createDropdownOptions();

  // load json file
  const companyData = await fs.readFile(
    process.cwd() + "/src/data/logos.json",
    "utf8"
  );

  // parse json to array of objects
  const modifiedCompanyData = JSON.parse(companyData);

  return (
    <main className="container">
      <Header />
      <hr className="border-2" />
      <Cards data={modifiedCompanyData} />
    </main>
  );
}
