"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start z-[9999]">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">New & Featured</Link>
                </li>
                <li>
                  <Link href="/women-product">Women</Link>
                </li>
                <li>
                  <Link href="/men-products">Men</Link>
                </li>
                <li tabIndex={0} className="relative">
                  <details>
                    <summary>All Generation</summary>
                    <ul className="p-2 w-[140px] absolute top-full left-0 bg-white shadow-lg z-10">
                      <li>
                        <Link href="/all-generation/boy">Boy</Link>
                      </li>
                      <li>
                        <Link href="/all-generation/girl">Girl</Link>
                      </li>
                      <li>
                        <Link href="/all-generation/kid">Kid</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/download (2).png"
                width={200}
                height={100}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">New & Featured</Link>
              </li>
              <li>
                <Link href="/women-product">Women</Link>
              </li>
              <li>
                <Link href="/men-products">Men</Link>
              </li>
              <li tabIndex={0} className="relative">
                <details>
                  <summary>All Generation</summary>
                  <ul className="p-2 w-[140px] absolute top-full left-0 bg-white shadow-lg z-10">
                    <li>
                      <Link href="/all-generation/boy">Boy</Link>
                    </li>
                    <li>
                      <Link href="/all-generation/girl">Girl</Link>
                    </li>
                    <li>
                      <Link href="/all-generation/kid">Kid</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <button type="button" onClick={() => router.push("/contact")}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="form-control">
              <div className="relative rounded-full overflow-hidden">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered pl-10 pr-3 py-2 w-32 md:w-auto rounded-full"
                />
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow z-[999]"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="photo_2023-09-07_11-07-03.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-[9999]"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
