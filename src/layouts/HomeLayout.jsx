import {Outlet} from "react-router-dom";
import * as constants from "../constants/Constants.jsx";
import MainImage from "../components/MainImage.jsx";

const LayoutHome = () => {
    return (
        <div className="h-screen">
            <header className="flex justify-between items-center color-reputationApp">
                <nav
                    className="color-reputationApp w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <div className=" flex items-center">
                            <MainImage/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                    {constants.NAME}</span>
                        </div>
                        <div className="order-2 md:order-3 flex-wrap items-center justify-end">
                            <div className="auth flex justify-between space-x-2 w-full md:w-full">
                                <button type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 \
                                        focus:outline-none focus:ring-blue-300 focus:ring-4 font-medium rounded-lg
                                        text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
                                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {constants.LOG_IN}
                                </button>
                                <button type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                                        focus:outline-none focus:ring-blue-300 focus:ring-4 font-medium rounded-lg
                                        text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
                                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {constants.SIGN_UP}
                                </button>
                            </div>
                        </div>
                        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-2"
                             id="navbar-cta">
                            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100
                            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white
                            dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent
                                       md:text-blue-700 md:p-0 dark:text-white"
                                       aria-current="page">{constants.HOME}</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100
                                       md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white
                                       dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                                       md:dark:hover:bg-transparent dark:border-gray-700">{constants.ABOUT}</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100
                                       md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white
                                       dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                                       md:dark:hover:bg-transparent dark:border-gray-700">{constants.CONTACT}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex md:order-2">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                    aria-expanded="false"
                                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100
                                        dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200
                                        dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1
                                              0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className="hidden relative md:block">
                                <div
                                    className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1
                                                  1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar"
                                       className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border
                                           border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder={constants.PLACE_HOLDER_SEARCH}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}
export default LayoutHome;