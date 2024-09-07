import React, { useEffect, useRef, useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import {
  BsBoxArrowRight,
  BsGear,
  BsPerson,
  BsQuestionCircle,
} from "react-icons/bs";
import profile from "../assets/images/profile.jpg";

export const ProfileDropDown = ({ classes }) => {
  const [open, setOpen] = useState(false);
  let ProfileDivRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!ProfileDivRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className={`relative ${classes}`}>
      <div
        className="flex items-center relative"
        ref={ProfileDivRef}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src={profile}
          className="rounded-full w-7 h-7 object-cover"
          alt=""
        />
        <span className="ml-2 font-semibold hidden md:block  cursor-pointer text-xs">
          Mr. Shahi
        </span>
        <RxTriangleDown />
      </div>

      <div
        className={` ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } absolute transition-opacity duration-500 ease-out before:content-[""] before:border-l-[var(--ternaryBgColor)] before:border-t-[var(--ternaryBgColor)] before:border-bg-[var(--primaryBgColor)]  before:border-t-[1px] 
                            before:border-l-[1px] before:absolute before:top-[-10px] before:right-5 before:h-5 before:w-5
                            before:bg-[var(--primaryBgColor)] before:rotate-[45deg] border
                           top-14 right-[2px] border-[var(--ternaryBgColor)] bg-[var(--primaryBgColor)] drop-shadow-lg w-[220px] p-2`}
      >
        <div className="text-center mb-2">
          <h2 className="text-md">Sameer Shahi</h2>
          <p className="text-xs ">Web Developer</p>
        </div>
        <hr />
        <ul>
          <li>
            <a
              className="px-3 py-2 bg-none hover:bg-[var(--secondaryBgColor)] transition-all duration-500 ease-out flex items-center gap-2 text-xs"
              href=""
            >
              <BsPerson /> My profile
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 bg-none hover:bg-[var(--secondaryBgColor)] transition-all duration-500 ease-out flex items-center gap-2 text-xs"
              href=""
            >
              <BsGear /> Acccount Setting
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 bg-none hover:bg-[var(--secondaryBgColor)] transition-all duration-500 ease-out flex items-center gap-2 text-xs"
              href=""
            >
              <BsQuestionCircle /> Need Help?
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 bg-none hover:bg-[var(--secondaryBgColor)] transition-all duration-500 ease-out flex items-center gap-2 text-xs"
              href=""
            >
              {" "}
              <BsBoxArrowRight /> Sign Out
            </a>
          </li>
        </ul>
        <label
          htmlFor="check"
          className="bg-gray-200 cursor-pointer relative w-16 h-8 rounded-full border drop-shadow-sm"
        >
          <input type="checkbox" id="check" className="sr-only peer" />
          <span className="w-2/5 h-3/4 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-9 transition-all duration-500"></span>
        </label>
      </div>
    </div>
  );
};
