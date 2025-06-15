"use client";

import Image from "next/image";
import PaginationComp from "./ui/PaginationComp";
import { useState } from "react";
import events from "./events";

export default function Events() {
 

  const eventsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const currentEvents = events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <div>
      <div>
        
      </div>
      <div className="mt-[24.8px] border-t ml-6 mr-5 border-(--border-col) pt-5 sm:flex sm:gap-4 lg:gap-10 sm:flex-wrap sm:items-center sm:justify-center lg:ml-[66px] lg:mr-[73px] lg:mt-[60px] lg:pt-[66px] sm:w-auto sm:ml-auto sm:mr-auto lg:w-auto">
        <p className="text-(--primary-color) text-[22.27px] font-medium w-full jakarta hidden lg:block mb-[15px]">
          Upcoming Events
        </p>

        {currentEvents.map((event, index) => (
          <div className="mb-7.5 lg:mb-[32px]" key={index}>
            {/* date container */}
            <div className="flex gap-[7px] items-center">
              <p className="w-3.5 h-3.5 bg-(--primary-color) rounded-full flex items-center justify-center"></p>

              <p className="text-[13px] font-extrabold text-(--primary-text) jakarta flex items-center justify-center pt-0.5 lg:text-[21.93px]">
                20-23 &nbsp;<span className="font-medium">Nov, 2025</span>
              </p>
              {/* {new Date().getUTCFullYear()} */}
            </div>

            {/* events container */}
            <div className="rounded-3xl mt-3 flex gap-[25px] items-center justify-between bg-(--dark-bg) h-[130px] pr-[27px] lg:w-full lg:max-w-[407px] lg:flex-col lg:h-auto lg:pt-2.5 lg:pl-2.5 lg:pr-2.5 lg:mt-[33px] lg:gap-[31px]">
              <div className="lg:flex lg:justify-center  lg:items-center lg:min-w-[388px] lg:h-[217px]">
                <Image
                  src={event.image}
                  width={142}
                  height={127}
                  alt="Event Image"
                  className="rounded-l-3xl min-h-[127px] lg:w-[388px] lg:h-[217px] lg:object-cover lg:object-top lg:rounded-[20px]"
                  priority
                />
              </div>

              <div className="jakarta max-w-[165px] lg:max-w-[362px]">
                <p className="text-[15.26px] text-(--primary-text) lg:hidden font-bold">
                  {event.title}
                </p>

                <p className="text-[20px] font-bold text-(--primary-text) hidden lg:block">
                  {event.subtitle}
                </p>

                <p className="text-[11px] font-medium text-(--gray-100) mt-[9px] lg:mt-[15px] lg:text-[15px]">
                  {event.description}
                </p>

                <div className="text-(--primary-color) flex mt-2.5 gap-[7.8px] lg:mt-[25px] lg:mb-[29px]">
                  <Image
                    src="/location.svg"
                    width={14.8}
                    height={14.8}
                    alt="location"
                    className="lg:w-[25px] lg:h-[25px]"
                  />
                  <p className="text-[18.38px] font-medium">
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <PaginationComp
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
