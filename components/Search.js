import { useState } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pets/search?term=${term}`);
    setTerm("");
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="relative">
        <input
          className="w-60 h-8 text-sm pl-7 p-1 border rounded-2xl text-slate-500"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Pets"
        />
        <div className="absolute top-1 left-1 p-1 text-slate-400">
          <FiSearch />
        </div>
      </form>
    </div>
  );
}
