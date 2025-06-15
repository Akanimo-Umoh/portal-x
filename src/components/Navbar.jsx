"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      {/* submit an event banner */}
      <div className="bg-(--secondary-bg) pr-6 items-center justify-center figtree relative py-[15px] hidden lg:flex">
        <p className="">
          Help us by submitting your events{" "}
          <span className="font-bold underline cursor-pointer">
            Submit an event
          </span>
        </p>

        <div className="absolute right-6">
          <Image src="close.svg" width={18} height={18} alt="cancel" />
        </div>
      </div>

      {/* nav links */}
      <div
        className={`px-[21px] flex lg:mt-0 lg:py-6.5 lg:pl-[66px] lg:pr-[85px] ${
          showNav
            ? "fixed mt-0 top-0 bg-(--background) w-full flex h-screen flex-col justify-baseline pt-[19px]"
            : "relative mt-[19px]"
        }`}
      >
        <div className="flex items-center w-full justify-between">
          <div>
            <Link
              href="/"
              className="text-white text-[19.88px] tracking-[-0.239px] font-(--font-oswald)"
            >
              PORTAL <span className="text-(--primary-color)">X</span>
            </Link>
          </div>

          <div>
            <div className="lg:hidden" onClick={() => setShowNav(!showNav)}>
              <Image
                src={!showNav ? "menu.svg" : "closeMenu.svg"}
                width={31}
                height={31}
                alt="menu"
              />
            </div>

            <div className="gap-4.5 hidden lg:flex">
              <Link href="./" className="nav-links">
                Home
              </Link>
              <Link href="" className="nav-links">
                Submit an Event
              </Link>
              <Link href="/register" className="nav-links">
                Join the Beta
              </Link>
            </div>
          </div>
        </div>

        {showNav && (
          <div className="z-50 flex flex-col gap-[33px] text-[20px] font-semibold jakarta lg:hidden animate-in slide-in-from-top-4 duration-300 w-full mt-[80px]">
            <Link
              href="/"
              onClick={() => setShowNav(false)}
              className="mob-links"
            >
              <p>Home</p>
              <Image src="/right.svg" alt="right" width={24} height={24} />
            </Link>

            <Link
              href="/submit"
              onClick={() => setShowNav(false)}
              className="mob-links"
            >
              <p>Submit Event</p>
              <Image src="/right.svg" alt="right" width={24} height={24} />
            </Link>

            <Link
              href="/beta"
              onClick={() => setShowNav(false)}
              className="mob-links"
            >
              <p>Join the Beta</p>
              <Image src="/right.svg" alt="right" width={24} height={24} />
            </Link>

            <Link
              href="/login"
              onClick={() => setShowNav(false)}
              className="mob-links"
            >
              <p>Login</p>
              <Image src="/right.svg" alt="right" width={24} height={24} />
            </Link>

            <Link
              href="/register"
              onClick={() => setShowNav(false)}
              className="mob-links"
            >
              <p>Sign Up</p>
              <Image src="/right.svg" alt="right" width={24} height={24} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
