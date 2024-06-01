import React from "react";
import "../css/footer.css";
import { FaRegCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer():JSX.Element {
    return (
        <div className="bg-gray-900 footer-div">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <FaRegCopyright />
                <h1 className="text-white"> 2024 |  Designed and coded with ❤️️ by Biswadeep Giri</h1>
            </IconContext.Provider>


        </div>
    )
}

export default  Footer;