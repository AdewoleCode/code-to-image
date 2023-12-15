import { RiJavascriptFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { SiPython } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";

export const languagesArray = [
    {
        name: "Javascript",
        icons: <RiJavascriptFill /> || undefined
    },
    {
        name: "Html",
        icons: <RiHtml5Fill /> || undefined
    },
    {
        name: "Css",
        icons: <IoLogoCss3 /> || undefined
    },
    {
        name: "Python",
        icons: <SiPython /> || undefined
    },
    {
        name: "Typescript",
        icons: <BiLogoTypescript /> || undefined
    },
    {
        name: "Java",
        icons: <FaJava /> || undefined
    },
]

export const themes = [
    "monokai",
    "chaos",
    "github_dark",
    "terminal",
    "ambiance",
    "twilight"
]

export const backgroundArray = [
    "linear-gradient(354deg, #ff75b5, #ffb86c)",
    "linear-gradient(337deg, #654ea3, #da98b4)",
    "linear-gradient(270deg, #514a9d, #24c6dc)",
]