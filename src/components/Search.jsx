"use client";

import events from "@/components/events";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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

  // disable scroll on main page when query is active
  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (!isLargeScreen && (query || (focused && recentSearches.length > 0))) {
      // Disable scroll on mobile
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll on desktop or when not focused
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [query, focused, recentSearches]);

  return (
    <div className="m-auto lg:mt-[27px] flex items-center justify-center w-full">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="w-full pl-6 pr-6 flex items-center justify-center">
          <div className="flex items-center justify-between gap-2.5 bg-white pl-3.5 pr-4 rounded-[50px] input-shadow jakarta font-medium w-full md:w-[647px] lg:gap-[23px] lg:pl-[25px] lg:pr-7 lg:mt-[49px] h-12 lg:h-auto lg:py-[25px]">
            {/* {focused ? (
              <Image
                src="back.svg"
                width={17}
                height={17}
                onClick={() => setQuery("")}
                alt="search"
                className="lg:w-[30px] lg:h-[30px] cursor-pointer"
              />
            ) : ( */}
            <Image
              src="search.svg"
              width={17}
              height={17}
              alt="search"
              className="lg:w-[30px] lg:h-[30px] cursor-pointer"
            />
            {/* )} */}

            <input
              ref={inputRef}
              type="text"
              id="search"
              value={query}
              placeholder="Search events near you—by vibe, city, or name..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setTimeout(() => setFocused(false), 100);
              }}
              className="jakarta font-medium w-full placeholder:text-[11px] text-[12.5px] leading-[18.75px] lg:text-[20px] placeholder-(--placeholder-col) focus:outline-none lg:placeholder:text-[21px] placeholder:font-[jakarta] placeholder:font-medium"
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
        </div>

        {/* search query results */}
        {query && (
          <div className="w-full fixed z-50 lg:relative bottom-0 lg:bottom-auto flex flex-col items-center justify-center lg:w-[647px] transition-all duration-300 ease-in-out transform opacity-0 translate-y-2 animate-fade-in box-border md:h-[calc(100vh-210px)] lg:h-auto">
            <div className="lg:absolute top-0 w-full lg:max-h-[640px] lg:overflow-hidden lg:flex lg:rounded-[29px] lg:pt-[45px] lg:pb-[45px] lg:px-[41px] bg-[var(--dark-bg)] pb-[40px] mb-[40px] lg:mb-0 search-shadow">
              <div className="space-y-[23px] h-[calc(100vh-142px)] lg:h-auto w-full flex flex-col items-center justify-baseline pt-4 pb-4 lg:pl-0 lg:pr-0 lg:pb-4 overflow-hidden overflow-y-auto hideScroll pl-6 pr-6">
                {events
                  .filter((event) => event.title.toLowerCase().includes(query))
                  .map((event, index) => {
                    return (
                      <div
                        key={index}
                        className="hover:underline text-[var(--primary-text)] flex items-center justify-between w-full lg:w-full small-screenRecent md:w-[647px]"
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
          </div>
        )}

        {/* recent search cotn */}
        {!query && focused && recentSearches.length > 0 && (
          <div className="w-full fixed z-50 bottom-0 lg:relative lg:bottom-auto flex flex-col items-center justify-baseline bg-[var(--dark-bg)] transition-all duration-300 ease-in-out transform opacity-0 translate-y-2 animate-fade-in lg:w-[647px]">
            <div className="bg-[var(--dark-bg)] w-full flex items-start justify-baseline md:w-[647px] lg:max-h-[640px] h-[calc(100vh-142px)] lg:h-auto lg:absolute rounded-[29px] search-shadow lg:px-[41px] lg:pb-[45px] lg:pt-[45px] lg:flex top-0 overflow-hidden">
              <div className="w-full lg:h-auto font-semibold sm:w-full md:w-[647px] small-screenRecent pt-4 pb-4 mr-6 ml-6 lg:mr-6 lg:ml-6 md:mr-0 md:ml-0 lg:p-0 lg:m-0 lg:pb-4 overflow-hidden overflow-y-auto">
                <p className="text-[var(--primary-color)] text-sm lg:text-[18px] mb-2 jakarta lg:text-left">
                  Recent Search
                </p>
                <div className="space-y-[23px] w-full flex flex-col items-center justify-baseline pt-4 pb-4">
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
