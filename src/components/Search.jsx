"use client";

import events from "@/components/events";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Login() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [focused, setFocused] = useState(false);

  // clear search input
  const handleClear = () => {
    setQuery("");
    setFocused(true);
    inputRef.current?.focus();
  };

  // save recent search
  const handleSaveRecentSearch = (searchTerm) => {
    setRecentSearches((prev) => {
      const updated = [searchTerm, ...prev.filter((q) => q !== searchTerm)];
      return updated.slice(0, 5); // max 5 recent
    });
  };

  const handleSubmit = (e, manualQuery) => {
    if (e) e.preventDefault();

    const searchTerm = manualQuery || query;

    if (searchTerm.trim()) {
      handleSaveRecentSearch(searchTerm);
      setQuery(searchTerm);
    }
  };

  function highlightMatch(text, query) {
    if (!query) return text;

    const index = text.toLowerCase().indexOf(query);
    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);

    return (
      <>
        {before}
        <span className="text-[var(--primary-color)]">{match}</span>
        {after}
      </>
    );
  }

  return (
    <div className="m-auto mt-[27px] flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-between gap-2.5 bg-white px-3.5 rounded-[50px] input-shadow jakarta font-medium w-[340px] sm:w-[358px] sm:px-5 lg:w-[647px] lg:gap-[14.46px] lg:pl-6 lg:pr-7 lg:mt-[49px] h-12 lg:h-auto small-screenSearch">
          <p className="w-[17px] h-[17px] lg:w-[30px] lg:h-[30px]">
            <Image
              src="search.svg"
              width={17}
              height={17}
              alt="search"
              className="lg:w-[30px] lg:h-[30px] cursor-pointer"
            />
          </p>
          {/* )} */}

          <input
            ref={inputRef}
            type="text"
            id="search"
            autoComplete="off"
            value={query}
            placeholder="Search events near you—by vibe, city, or name..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setTimeout(() => setFocused(false), 100);
            }}
            className="jakarta font-medium w-full placeholder:text-[11px] lg:text-[20px] placeholder-(--placeholder-color) focus:outline-none lg:placeholder:text-[21px] placeholder:font-[jakarta] placeholder:font-medium"
          />

          {query ? (
            <Image
              onClick={handleClear}
              src="close.svg"
              width={18}
              height={18}
              alt="Clear search"
              className="lg:w-[33px] lg:h-[33px] cursor-pointer"
            />
          ) : (
            ""
          )}
        </div>

        {/* search query results */}
        {query && (
          <div className="w-full relative flex flex-col items-center justify-center shadow-md bg-[var(--background)]">
            <div className="space-y-[23px] absolute top-0 bg-[var(--background)] w-full flex flex-col items-center justify-center pt-4 pb-4">
              {events
                .filter((event) => event.title.toLowerCase().includes(query))
                .map((event, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:underline text-[var(--primary-text)] flex items-center justify-between w-[340px] sm:w-[358px] lg:w-[647px] small-screenRecent"
                    >
                      <Image
                        src="/recentSearch.svg"
                        width={20}
                        height={20}
                        alt="recent"
                        onClick={() => {
                          handleSubmit(null, search);
                          inputRef.current?.blur();
                        }}
                        className="cursor-pointer"
                      />

                      <p
                        onClick={() => {
                          handleSubmit(null, search);
                          inputRef.current?.blur();
                        }}
                        className="w-full pl-[22px] text-sm font-medium flex items-center justify-start lg:text-[18px] jakarta"
                      >
                        {highlightMatch(event.title, query)}
                      </p>

                      <Image
                        src="/upArrow.svg"
                        width={20}
                        height={20}
                        alt="search"
                        className="cursor-pointer"
                        onClick={() => {
                          setQuery(search);
                          inputRef.current?.focus();
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* recent search cotn */}
        {!query && focused && recentSearches.length > 0 && (
        <div className="w-full relative flex flex-col items-center justify-center shadow-md bg-[var(--background)] h-full">
          <div className="absolute top-0 bg-[var(--background)] w-full flex items-center justify-center">
            <div className="w-[340px] font-semibold sm:w-[358px] lg:w-[647px] small-screenRecent pt-4 pb-4">
              <p className="text-[var(--primary-color)] text-sm lg:text-[18px] mb-2 jakarta">
                Recent Search
              </p>
              <div className="space-y-[23px] w-full flex flex-col items-center justify-center pt-4 pb-4">
                {recentSearches.map((search, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:underline text-[var(--primary-text)] flex items-center justify-between w-full"
                >
                  <Image
                    src="/recentSearch.svg"
                    width={20}
                    height={20}
                    alt="recent"
                    onClick={() => {
                      handleSubmit(null, search);
                      inputRef.current?.blur();
                    }}
                    className="cursor-pointer"
                  />

                  <p
                    onClick={() => {
                      handleSubmit(null, search);
                      inputRef.current?.blur();
                    }}
                    className="w-full pl-[22px] text-sm font-medium flex items-center justify-start lg:text-[18px] jakarta"
                  >
                    {search}
                  </p>

                  <Image
                    src="/upArrow.svg"
                    width={20}
                    height={20}
                    alt="search"
                    className="cursor-pointer"
                    onClick={() => {
                      setQuery(search);
                      inputRef.current?.focus();
                    }}
                  />
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}
      </form>
    </div>
  );
}
