import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
      <div className="fixed top-0 left-0 border-b-2 flex flex-wrap items-center justify-between w-full lg:h-[9vh] h-fit shadow-2xl shadow-white bg-sky-400 py-1 px-10">
        <div className="flex flex-row gap-x-4  h-full">
          <div>
            <img className="w-13 h-12" src="post.png" />
          </div>
          <div>
            <span className="font-semibold text-gray-200  text-[35px]">
              Note
            </span>
            <span className="font-normal text-blue-600 text-[35px]">ly</span>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center gap-x-7 py-3  h-full">
          <a href="#about">
            <button
              className={`font-bold cursor-pointer bg-clip-text bg-gradient-to-r from-orange-600  to-blue-600  text-transparent text-xl  ${
                router.asPath == "/" && "text-white underline"
              }`}
            >
              About
            </button>
          </a>
          <Link href="/instructions">
            <button
              className={`${
                router.asPath == "/instructions" && "text-white underline"
              } font-bold  bg-clip-text bg-gradient-to-r from-orange-600  to-blue-600  text-transparent text-xl `}
            >
              Instructions
            </button>
          </Link>

          <Link href="/projects">
            <button
              className={` ${
                router.asPath == "/projects" && "text-white underline"
              } font-bold  bg-clip-text bg-gradient-to-r from-orange-600  to-blue-600  text-transparent text-xl`}
            >
              Projects
            </button>
          </Link>

          <Link href="/contact">
            <button
              className={` ${
                router.asPath == "/contact" && "text-white underline"
              } font-bold  bg-clip-text bg-gradient-to-r from-orange-600  to-blue-600  text-transparent text-xl`}
            >
              Contact
            </button>
          </Link>
        </div>
        <div className="flex items-start w-[200px] justify-end flex-row gap-x-2  h-full">
          <div>
            <img className="w-13 h-8 mt-3.5" src="edit.png" />
          </div>
          <Link href="/notes">
            <button
              className={`my-auto font-semibold text-gray-100 cursor-pointer text-xl ${
                router.asPath == "/contact" && "text-white underline"
              }`}
            >
              Let{"'"}s Start
            </button>
          </Link>
        </div>
      </div>
    );
}

export default Navbar;