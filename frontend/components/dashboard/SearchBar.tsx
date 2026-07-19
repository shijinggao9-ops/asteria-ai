"use client";

import { Search } from "lucide-react";

export default function SearchBar() {

  return (

    <div className="rounded-2xl border bg-white p-4 shadow-sm">

      <div className="flex items-center">

        <Search
          className="mr-3 text-slate-400"
          size={18}
        />

        <input

          className="flex-1 outline-none"

          placeholder="Search projects..."

        />

        <div className="rounded-lg border bg-slate-100 px-3 py-1 text-sm text-slate-500">

          Ctrl K

        </div>

      </div>

    </div>

  );

}