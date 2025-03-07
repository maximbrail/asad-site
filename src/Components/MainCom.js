import React from "react";
import "./styleCom.css";

export const MainCom = () => {
    return (
        <div className="main-obsh">
            <div className="main">
                <h1 className="main-title">Skills</h1>

                <div className="main-btns">
                    <button className="main-btn">HTML</button>
                    <button className="main-btn">CSS</button>
                    <button className="main-btn">JS</button>
                    <button className="main-btn">React.js</button>
                    <button className="main-btn">AJAS / Axios</button>
                    <button className="main-btn">REST API</button>
                    <button className="main-btn">C++</button>
                </div>
            </div>

            <div className="main">
                <h1 className="main-title">About</h1>

                <div className="main-btns">
                    <button className="main-btn">Football</button>
                    <button className="main-btn">Gym</button>
                    <button className="main-btn">History</button>
                    <button className="main-btn">Movies</button>
                    <button className="main-btn">Music</button>
                    <button className="main-btn">Cars</button>
                    <button className="main-btn">Games</button>
                </div>
            </div>
        </div>
    );
};

export default MainCom;