"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import events from "./events";

function Search({ search, setSearch }) {
  return (
    <div className="mr-auto ml-auto flex items-center justify-between gap-2.5 bg-white px-3.5 rounded-[50px] input-shadow jakarta font-medium w-[358px] lg:w-[647px] lg:gap-[14.46px] lg:pl-6 lg:pr-7 lg:mt-[49px]">
      <Image
        src="search.svg"
        width={17}
        height={17}
        alt="search"
        className="lg:w-[30px] lg:h-[30px]"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events near you—by vibe, city, or name..."
        className="pt-3.5 pb-4 w-full placeholder:text-[11px] placeholder-(--placeholder-color) focus:outline-none lg:placeholder:text-[20px] lg:pt-[27px] lg:pb-[24px]"
      />

      <Image
        src="close.svg"
        width={18}
        height={18}
        alt="Clear search"
        onClick={() => setSearch("")}
        className="lg:w-[33px] lg:h-[33px]"
      />
    </div>
  );
}

function List({ items }) {
  if (items.length === 0)
    return (
      <div className="text-white w-[358px] lg:w-[647px] ml-auto mr-auto text-center">
        No result
      </div>
    );
  return (
    <div className="relative flex items-center justify-center w-full z-50">
      <div className="w-full ml-auto mr-auto mt-[33px] absolute top-0 bg-(--background) overflow-y-auto pb-8">
        <p className="text-[14px] font-semibold text-(--primary-color) jakarta w-[358px] lg:w-[647px] ml-auto mr-auto">
          Recent Searches
        </p>

        <ul className="text-(--primary-text) mt-[22px] text-[15px] w-[358px] lg:w-[647px] ml-auto mr-auto jakarta space-y-[23px]">
          {items.map((event, index) => (
            <li key={index} className="flex items-center justify-between">
              <Image
                src="/recentSearch.svg"
                width={20}
                height={20}
                alt="recent"
              />
              <p className="w-full pl-7">{event.title}</p>
              <Image src="/upArrow.svg" width={20} height={20} alt="search" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SearchEvents() {
  const [search, setSearch] = useState("");
  //   const [filtered, setFiltered] = useState([]);
  const filteredEvernts = search
    ? events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      {/* <p>{search}</p> */}
      <Search {...{ search, setSearch }} />

      {search && <List items={filteredEvernts} />}
    </div>
  );
}
