"use client";

import Image from "next/image";
import PaginationComp from "./ui/PaginationComp";
import { useState } from "react";
import events from "./events";

export default function EventsPage() {
  const eventsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const currentEvents = events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <div>
      <div className="ml-auto mr-auto mt-[24.8px] flex flex-col lg:flex-row lg:gap-10 flex-wrap items-center justify-center lg:ml-[66px] lg:mr-[73px] lg:mt-[60px] lg:pt-[66px] lg:w-auto md:w-full md:justify-between md:flex-row md:gap-1.5 small-card mdCard w-auto pl-6 pr-6">
        <div className="border-t border-(--border-col) w-full pt-5"></div>
        <p className="text-(--primary-color) text-[22.27px] font-medium w-full jakarta hidden lg:block mb-[15px]">
          Upcoming Events
        </p>

        {currentEvents.map((event, index) => (
          <div
            className="mb-7.5 lg:mb-[32px] w-full ml-auto mr-auto md:w-[358px] lg:w-[407px] lg:h-full lg:flex lg:flex-col lg:justify-evenly small-card mdCardCtn"
            key={index}
          >
            {/* date container */}
            <div className="flex gap-[7px] items-center">
              <p className="w-3.5 h-3.5 bg-(--primary-color) rounded-full flex items-center justify-center"></p>

              <p className="text-[13px] font-extrabold text-(--primary-text) jakarta flex items-center justify-center pt-0.5 lg:text-[21.93px]">
                20-23 &nbsp;<span className="font-medium">Nov, 2025</span>
              </p>
              {/* {new Date().getUTCFullYear()} */}
            </div>

            {/* events container */}
            <div className="rounded-3xl mt-3 flex items-center justify-between bg-(--dark-bg) pr-[27px] lg:w-full lg:max-w-[407px] lg:flex-col lg:pt-2.5 lg:pl-2.5 lg:pr-2.5 lg:mt-[33px] lg:gap-[31px] lg:items-center lg:h-full lg:justify-evenly events-ctn eventCard">
              <div className="flex-1 min-w-[142px] w-full lg:flex lg:justify-center lg:items-center lg:min-w-[388px] lg:h-[217px] mr-6 lg:mr-0 lg:overflow-hidden lg:rounded-[20px] lg:flex-none events-ctnImg">
                <Image
                  src={event.image}
                  width={142}
                  height={127}
                  alt="Event Image"
                  className="rounded-l-3xl min-h-[127px] lg:w-full lg:h-full lg:object-cover lg:object-top cardImg"
                  priority
                />
              </div>

              <div className="jakarta w-full lg:max-w-[362px] flex-1 lg:min-h-[153px] lg:mb-[29px] eventsDescription">
                <div className="w-full lg:w-auto lg:min-h-[153px] lg:flex lg:flex-col lg:justify-between eventsDescription descriptionBox pl-2
                 pr-2">
                  <div className="lg:flex lg:flex-col lg:h-[120px] lg:justify-start gap-[15px]">
                    <p className="text-[15px] text-(--primary-text) lg:hidden font-bold line-clamp-2">
                      {event.title}
                    </p>

                    <p className="text-[20px] font-bold text-(--primary-text) hidden lg:block lg:leading-6 lg:h-13 lg:line-clamp-2">
                      {event.subtitle}
                    </p>

                    <p className="text-[11px] font-medium text-(--gray-100) mt-[9px] lg:leading-5 lg:mt-0 lg:text-[15px] lg:w-[310px] line-clamp-2 mdDesc">
                      {event.description}
                    </p>
                  </div>

                  <div className="text-(--primary-color) flex mt-2.5 gap-[7.8px] lg:mt-0">
                    <Image
                      src="/location.svg"
                      width={14.8}
                      height={14.8}
                      alt="location"
                      className="lg:w-[25px] lg:h-[25px]"
                    />
                    <p className="text-[10px] lg:text-[18px] font-medium">
                      {event.location}
                    </p>
                  </div>
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
