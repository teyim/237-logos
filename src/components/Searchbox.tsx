import { Search } from "lucide-react";

function Searchbox() {
  return (
    <div className="flex items-center space-x-2 ring-1 ring-ring py-2  rounded-xl bg-white">
      <input
        type="text"
        className="w-80 px-3 ring-0 border-0 outline-none active:border-none"
        placeholder="Search Company by name"
      />
      <button className="px-3 py-2 ">
        <Search strokeWidth={1.75} />
      </button>
    </div>
  );
}

export default Searchbox;
