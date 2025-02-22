import { useState, useEffect } from "react";
import { FaMagento } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import {
  IoHelpOutline,
  IoMenuOutline,
  IoPeopleOutline,
  IoSearchOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import banner from "../assets/images/banner.png";
import { Link, useLocation } from "react-router-dom";
import { MessagesDropDown } from "../utilities/MessagesDropDown";
import { NotificationDropdown } from "../utilities/NotificationDropDown";
import { ProfileDropDown } from "../utilities/ProfileDropDown";
import ThemeSwitcher from "../components/ThemeSwitcher";

const sidebarItems = [
  {
    title: "Overview",
    label: "",
    icon: <RxDashboard className=" text-2xl" />,
    path: "/",
  },
  {
    title: "Reports",
    label: "reports",
    icon: <IoStatsChartOutline className="text-2xl" />,
    path: "/reports",
  },
  {
    title: "Customers",
    label: "customers",
    icon: <IoPeopleOutline className="text-2xl" />,
    path: "/customers",
  },
  {
    title: "Products",
    label: "products",
    icon: <BsCart className="text-2xl" />,
    path: "/products",
  },
  {
    title: "Help",
    label: "help",
    icon: <IoHelpOutline className="text-2xl" />,
    path: "/help",
  },
];
const Layout = ({ children }) => {
  const location = useLocation();
  const [isOpen, setSideBarOpen] = useState(true);
  const toggleMenu = () => {
    setSideBarOpen(!isOpen);
  };

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const showSidebar = () => {
    if (window.innerWidth <= 640) {
      console.log(isOpen);
      console.log(window.innerWidth);
      setSideBarOpen(false);
    }
  };
  useEffect(() => {
    showSidebar();
  }, [isOpen]);

  window.addEventListener("resize", showSidebar);

  return (
    <div className="relative w-full">
      {/* LeftSidebar */}
      <div
        className={`${
          isOpen ? "w-[244px] " : "w-[65px]"
        } transition-all duration-500 ease-out  h-screen navigation fixed left-0 bg-[var(--primaryBgColor)] border-[var(--primaryBgColor)]`}
      >
        {/* Logo */}
        <div className="group w-full gap-1 flex items-center text-white">
          <Link className="flex" to="/">
            <span className="icon text-4xl py-3 px-3">
              <FaMagento className="text-[var(--LogoBgColor)]" />
            </span>
            <span className="text-2xl text-green-500 text-[var(--LogoTextColor)] ml-2 font-bold py-3">
              LeadGen
            </span>
          </Link>
        </div>
        {/* NavItems */}
        <ul className="w-full mt-5 md:active:w-[244px]">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`${
                splitLocation[1] === item.label
                  ? "active bg-[var(--LinkBgColor)]"
                  : ""
              } my-2 relative group w-full rounded-tl-full rounded-bl-full hover:bg-[var(--LinkBgColor)]`}
            >
              <Link
                to={item.path}
                className={`${
                  splitLocation[1] === item.label
                    ? "active text-[var(--LinkActiveColor)] "
                    : "text-[var(--LinkColor)]"
                } group-hover:text-[var(--LinkActiveColor)] relative group flex w-full  items-center `}
              >
                <span className="icon relative py-3 block px-5 text-center">
                  {item.icon}
                </span>
                <span className=" font-semibold relative block py-3 px-2 whitespace-nowrap text-sm">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={`${isOpen ? " mt-5 p-5" : "hidden"}`}>
          <div className="bg-[var(--secondaryBgColor)]  rounded drop-shadow-lg px-2 py-4 flex flex-col items-center justify-end">
            <img
              src={banner}
              className="w-[60px] -[60px] object-contain"
              alt=""
            />
            <h1 className="text-sm text-[var(--primaryHeadingColor)] font-bold leading-8">
              Unlimited Acess
            </h1>
            <p className="text-xs text-center text-[var(--primaryParagraphColor)] ">
              Upgrage to plan to get unlimited reports
            </p>
            <button className="bg-none text-[var(--primaryParagraphColor)] border-[1px] border-primaryTextColor py-2 px-3 text-xs hover:bg-[var(--LinkHoverColor)] hover:border-none hover:text-white mt-5">
              Upgrade
            </button>
          </div>
        </div>
      </div>
      {/* RightBar */}
      <div
        className={`${
          isOpen
            ? "w-[calc(100%-244px)] left-[244px]"
            : "w-[calc(100%-65px)] left-[65px] "
        }  transition-all duration-500 ease-out absolute  min-h-screen bg-[var(--secondaryBgColor)] `}
      >
        {/* TopBar */}
        <div className="topbar z-10 sticky top-0  w-full h-[60px] flex justify-between items-center">
          <div className="flex gap-3 items-center">
            {/* Hamburger */}
            <IoMenuOutline
              onClick={toggleMenu}
              className="hamburger w-[30px] h-[30px] cursor-pointer hidden sm:block"
            />

            {/* SearchBar */}
            <div className="search-bar border-[1px] min-w-[300px]  hidden lg:flex focus:border-secondaryTextColor items-center">
              <input
                className="border-none w-full py-2 px-4 outline-none text-primaryTextColor text-sm"
                type="text"
                placeholder="Search for ..."
              />
              <IoSearchOutline className="w-[40px] h-[40px] py-2 px-2 cursor-pointer text-primaryTextColor" />
            </div>
          </div>

          <div className="right-topbar-items flex gap-4 pr-4">
            <IoSearchOutline className="w-[25px] h-[25px] lg:hidden cursor-pointer text-primaryTextColor" />
            <ThemeSwitcher />

            <NotificationDropdown />
            <MessagesDropDown />
            <ProfileDropDown classes={"profiler"} />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};
export default Layout;
