"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import events from "./events";

function Search({ search, setSearch, focused, setFocused, onSubmit }) {
  const inputRef = useRef(null);

  const handleClear = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="mr-auto ml-auto flex items-center justify-between gap-2.5 bg-white px-3.5 rounded-[50px] input-shadow jakarta font-medium w-[340px] sm:w-[358px] sm:px-5 lg:w-[647px] lg:gap-[14.46px] lg:pl-6 lg:pr-7 lg:mt-[49px] small-screenSearch">
      <label htmlFor="search">
        <Image
          src="search.svg"
          width={17}
          height={17}
          alt="search"
          className="lg:w-[30px] lg:h-[30px]"
        />
      </label>

      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events near you—by vibe, city, or name..."
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onKeyDown={handleKeyDown}
        className="jakarta font-medium pt-3.5 pb-4 w-full placeholder:text-[11px] lg:text-[20px] placeholder-(--placeholder-color) focus:outline-none lg:placeholder:text-[21px] lg:pt-[27px] lg:pb-[24px] placeholder:font-[jakarta] placeholder:font-medium"
      />

      {focused && search && (
        <Image
          src="close.svg"
          width={18}
          height={18}
          alt="Clear search"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClear}
          className="lg:w-[33px] lg:h-[33px] cursor-pointer"
        />
      )}
    </div>
  );
}

function List({ items, setSearch, onSubmit }) {
  if (items.length === 0)
    return (
      <div className="relative flex items-center justify-center small-screenRecent">
        <div className="text-white w-[358px] lg:w-[647px] ml-auto mr-auto text-center absolute mt-8 small-screenRecent">
          No result
        </div>
      </div>
    );

  return (
    <div className="relative flex items-center justify-center w-full z-50">
      <div className="w-full ml-auto mr-auto mt-[33px] absolute top-0 bg-(--background) overflow-y-auto pb-8 small-screenRecent">
        <p className="text-[14px] font-semibold text-(--primary-color) jakarta w-[358px] lg:w-[647px] ml-auto mr-auto pl-5 small-screenRecent">
          Recent Searches
        </p>

        <ul className="text-(--primary-text) mt-[22px] text-[15px] w-[358px] lg:w-[647px] ml-auto mr-auto jakarta space-y-[23px] pl-5 pr-5 small-screenRecent">
          {items.map((event, index) => (
            <li key={index} className="flex items-center justify-between">
              <Image
                src="/recentSearch.svg"
                width={20}
                height={20}
                alt="recent"
                className="cursor-pointer"
                onClick={() => {
                  setSearch(event.title);
                  onSubmit(event.title);
                }}
              />
              <p
                className="w-full cursor-pointer pl-7"
                onClick={() => setSearch(event.title)}
              >
                {event.title}
              </p>
              <Image
                src="/upArrow.svg"
                width={20}
                height={20}
                alt="search"
                className="cursor-pointer"
                onClick={() => setSearch(event.title)}
              />
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
  const [recentSearches, setRecentSearches] = useState([]);
  const [focused, setFocused] = useState(false);

  const filteredEvernts = search
    ? events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const saveRecentSearch = (query) => {
    if (!query.trim()) return;
    setRecentSearches((prev) => {
      const updated = [query, ...prev.filter((item) => item !== query)];
      return updated.slice(0, 5);
    });
  };

  const handleSearchSubmit = () => {
    saveRecentSearch(search);
  };

  return (
    <div>
      {/* <p>{search}</p> */}
      <Search
        {...{ search, setSearch }}
        focused={focused}
        setFocused={setFocused}
        onSubmit={handleSearchSubmit}
      />

      {focused && !search && (
        <List
          items={recentSearches.map((title) => ({ title }))}
          setSearch={setSearch}
          onSubmit={(query) => {
            setSearch(query);
            saveRecentSearch(query);
          }}
        />
      )}

      {search && (
        <List
          items={filteredEvernts}
          setSearch={setSearch}
          onSubmit={handleSearchSubmit}
        />
      )}
    </div>
  );
}
