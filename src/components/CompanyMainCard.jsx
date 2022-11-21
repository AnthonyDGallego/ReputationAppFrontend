import React from "react";
import * as constants from "../constants/Constants.jsx";

const CompanyMainCard = ({photoUrl, title, score, id}) => {
    return (
        <div>
            <div
                className="my-4 color-reputationApp w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={photoUrl} alt={title+" image"} />

                </a>
                <div className="px-5 pb-5">
                    <div className="flex justify-center">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                    </div>
                    <div className="flex justify-center items-center mt-2.5 mb-5 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 w-16 justify-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>
                            Star
                            </title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span
                            className="">{score}</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <a href="#"
                           className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            id={title + " button"}>
                            {constants.MORE_INFORMATION}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default CompanyMainCard;