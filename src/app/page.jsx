import Events from "@/components/EventsPage";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <section className="mt-[33px] lg:text-center">
          <div className="lg:flex lg:flex-col-reverse">

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
