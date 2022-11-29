import {Header} from "./Header";
import React from "react";
import {Footer} from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () =>{

    return(
        <>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
    }