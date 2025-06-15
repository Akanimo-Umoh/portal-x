import React from "react";

export default function Footer() {
  return (
    <div className="text-[14px] font-semibold jakarta flex flex-col items-center justify-center mt-[41px] mb-[39px] lg:text-[20px] lg:flex-row lg:gap-5">
      <p className="text-(--primary-text)">
        © 2025 Portal X. All rights reserved.
      </p>
      <div className="text-(--primary-color) flex">
        <p className="underline">Terms of Service</p>&nbsp;
        <p>|</p>&nbsp;
        <p className="underline">Privacy Policy</p>
      </div>
    </div>
  );
}
