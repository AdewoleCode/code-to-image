import one from "../assets/1.svg"
import two from "../assets/2.svg"
import three from "../assets/3.svg"
import four from "../assets/4.svg"
import five from "../assets/5.svg"
import six from "../assets/wifi.png"

export const languagesArray = [
    {
        name: "Javascript",
        icon: "../assets/2.svg"
    },
    {
        name: "Html",
        icon: two
    },
    {
        name: "Css",
        icon: three
    },
    {
        name: "Python",
        icon: four
    },
    {
        name: "Typescript",
        icon: five
    },
    {
        name: "Java",
        icon: six
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


export const initialCodeValue = `function sayNameAndAge(nameValue, ageValue){
    return your name is {nameValue} and you're {ageValue} years old;
}

const result1 = sayNameAndAge('kunle', '40')
const result2 = sayNameAndAge('ola', '10')
const result3 = sayNameAndAge('wale', '25')

console.log(result1, result2, result3)

`

// todo
// import/download icons from github and fix funtionality
//react-outside clicker types install and implement funtionalities

// try to add url funtionality. 