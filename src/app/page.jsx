import Events from "@/components/EventsPage";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <section className="mt-[33px] lg:text-center">
          <div className="lg:flex lg:flex-col-reverse">
            {/* <div className="mr-auto ml-auto flex items-center justify-between gap-2.5 bg-white px-3.5 rounded-[50px] input-shadow jakarta font-medium w-[358px] lg:w-[647px] lg:gap-[14.46px] lg:pl-6 lg:pr-7 lg:mt-[49px]">
              <Image src="search.svg" width={17} height={17} alt="search" className="lg:w-[30px] lg:h-[30px]" />

              <input
                type="search"
                placeholder="Search events near you—by vibe, city, or name..."
                className="pt-3.5 pb-4 w-full placeholder:text-[11px] placeholder-(--placeholder-color) focus:outline-none lg:placeholder:text-[20px] lg:pt-[27px] lg:pb-[24px]"
              />

              <Image src="close.svg" width={18} height={18} alt="Clear search" className="lg:w-[33px] lg:h-[33px]" />
            </div> */}
            <Search />

            <div className="jakarta ml-6 mr-9 mt-[33px] lg:mt-[54px] sm:text-center mediumCenter">
              <div>
                <p className="text-(--primary-color) text-lg font-bold lg:hidden">
                  Find your people. Come outside!
                </p>

                <p className="hidden lg:block text-[62px] leading-[69px] text-(--primary-text) lufga">
                  Discover your <span className="colored-text">community.<br></br></span> Step outside and <span className="colored-text">embrace</span> the world!
                </p>
              </div>

              <div>
                <p className="text-(--primary-text) text-[13.5px] leading-[17px] mt-[11px] lg:mt-4.5 lg:leading-7 lg:text-[20px] jakarta">
                  This event aggregator has been curated to match your vibe,
                  helping you find your people nearby.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Events />
        </section>
      </div>
    </div>
  );
}
