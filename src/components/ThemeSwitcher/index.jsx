import { useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { BiSun } from "react-icons/bi";
import { MdComputer, MdOutlineDarkMode } from "react-icons/md";
import { colors, modes } from "./data";

function getInitialMode() {
  const savedMode = localStorage.getItem("theme");
  if (typeof savedMode === "string") {
    return savedMode;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function getInitialColor() {
  const savedColor = localStorage.getItem("color");
  if (typeof savedColor === "string") {
    return savedColor;
  }
  return "cyan";
}
export default function ThemeSwitcher() {
  const [showOptions, setShowOptions] = useState(false);
  const [mode, setMode] = useState(getInitialMode());
  const [color, setColor] = useState(getInitialColor());
  //set mode according to system
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setMode(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
    const imageElements = document.getElementsByClassName("logo");
    for (let i = 0; i < imageElements.length; i++) {
      if (mode == "dark") {
        imageElements[i].style.filter = "invert(1)";
      } else {
        imageElements[i].style.filter = "invert(0)";
      }
    }
    document.documentElement.setAttribute("data-color", color);
    localStorage.setItem("color", color);
  }, [mode, color]);

  const handleSettingsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleModeClick = (e) => {
    if (e.target.getAttribute("value") === "system") {
      let mediaquery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (mediaquery) {
        setMode("dark");
      } else {
        setMode("light");
      }
    } else {
      setMode(e.target.getAttribute("value"));
    }
  };

  const handleColorClick = (e) => {
    setColor(e.target.getAttribute("value"));
  };
  return (
    <>
      <div
        className={`${
          showOptions === true ? "hidden" : "flex"
        } fixed z-[1000] cursor-pointer items-center justify-center bg-[var(--primaryBgColor)] right-0 top-[50%] bottom-[50%] text-[var(--primaryTextColor)] border w-8 h-8`}
        style={{
          boxShadow: " 1px 2px 14px var(--boxShadowColor)",
        }}
      >
        {mode === "light" && <BiSun size={20} onClick={handleSettingsClick} />}
        {mode === "dark" && (
          <MdOutlineDarkMode size={20} onClick={handleSettingsClick} />
        )}
        {mode === "system" && (
          <MdComputer size={20} onClick={handleSettingsClick} />
        )}
      </div>
      {showOptions && (
        <ul
          className={`${
            showOptions === true ? "right-0 " : "-right-full"
          } transition-all duration-500 ease-out w-40 sm:w-60  h-full p-2 bg-[var(--primaryBgColor)] fixed flex flex-col top-0 text-[var(--primaryTextColor)] z-[100] cursor-pointer`}
          style={{
            boxShadow: " 1px 2px 14px var(--boxShadowColor)",
          }}
        >
          <div className="flex items-center justify-between gap-3 my-2">
            <h1 className="text-[var(--primaryTextColor)] text-2xl font-semibold">
              Settings
            </h1>
            <RxCross2 onClick={handleSettingsClick} size={25} />
          </div>
          <hr />
          <div className="my-3 mx-3">
            <h1 className="text-[var(--primaryHeadingColor)] font-semibold text-sm ">
              Mode
            </h1>
            {modes.map((item, index) => (
              <li
                key={index}
                className="flex text-sm  text-[var(--primaryParagraphColor)] hover:bg-[var(--LinkHoverColor)] hover:text-[var(--LinkHoveredTextColor)] font-medium cursor-pointer items-center px-2 py-1  gap-2"
                value={item.id}
                onClick={(e) => handleModeClick(e)}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </div>
          <div className="my-3 mx-3">
            <h1 className="text-[var(--primaryHeadingColor)] font-semibold text-sm ">
              Themes
            </h1>
            {colors.map((item, index) => (
              <label
                key={index}
                htmlFor={item.id}
                className="flex  items-center cursor-pointer px-2 py-1 "
              >
                <input
                  type="radio"
                  id={item.id}
                  name="color"
                  value={item.id}
                  checked={color === item.id}
                  onChange={(e) => handleColorClick(e)}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2  mr-2 relative flex items-center justify-center ${
                    color === item.id
                      ? "border-[var(--togglerBorderColor)]"
                      : "border-gray-400"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      color === item.id
                        ? "bg-[var(--togglerColor)]"
                        : "bg-white"
                    }`}
                  ></span>
                </span>
                <span className="font-medium text-sm text-[var(--primaryParagraphColor)]">
                  {item.name}
                </span>
              </label>
            ))}
          </div>
        </ul>
      )}
    </>
  );
}
