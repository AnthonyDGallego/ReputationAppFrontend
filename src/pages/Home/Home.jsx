import React from "react";
import {Outlet} from "react-router-dom";

const Home = () => {
    return(
        <div className="flex h-screen">
            <div className="flex w-full justify-center">
                asdasdsad
                <Outlet />
            </div>
        </div>
    );
};

export default Home;