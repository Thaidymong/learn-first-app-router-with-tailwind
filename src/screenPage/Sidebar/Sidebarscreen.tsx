"use client";

import Link from "next/link";

function SidebarScreen() {
  return (
    <div className="flex">
      <div className="navbar flex flex-row-reverse">
        <Link href="/all-generation/boy">
          <div className="bg-[#8686FF] px-4 py-2 rounded-md text-green-50 text-base mx-4">
            Boy Collection
          </div>
        </Link>
        <Link href="/all-generation/girl">
          <div className="bg-[#8686FF] px-4 py-2 rounded-md text-green-50 text-base mx-4">
            Girl Collection
          </div>
        </Link>
        <Link href="/all-generation/kid">
          <div className="bg-[#8686FF] px-4 py-2 rounded-md text-green-50 text-base mx-4">
            Kid Collection
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SidebarScreen;
