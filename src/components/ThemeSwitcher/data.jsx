import { RxCross2 } from "react-icons/rx";
import { BiSun } from "react-icons/bi";
import { MdComputer, MdOutlineDarkMode } from "react-icons/md";

export const modes = [
  {
    id: "light",
    name: "Light",
    icon: <BiSun size={20} />,
    background: "light-background",
    class: "theme-mode-light",
  },
  {
    id: "dark",
    name: "Dark",
    icon: <MdOutlineDarkMode size={20} />,
    background: "dark-background",
    class: "theme-mode-dark",
  },
  {
    id: "system",
    name: "System",
    icon: <MdComputer size={20} />,
    background: "dark-background",
    class: "theme-mode-dark",
  },
];

export const colors = [
  {
    id: "yellow",
    name: "Yellow",
    background: "yellow-color",
    class: "theme-color-yellow",
  },
  {
    id: "green",
    name: "Green",
    background: "green-color",
    class: "theme-color-green",
  },

  {
    id: "cyan",
    name: "Cyan",
    background: "cyan-color",
    class: "theme-color-cyan",
  },

  {
    id: "orange",
    name: "Orange",
    background: "orange-color",
    class: "theme-color-orange",
  },
];
