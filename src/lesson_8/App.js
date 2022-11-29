import React from "react";

import {Routes, Route, Navigate} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {FullPost} from "./pages/FullPost";
import { Login } from "./pages/Login";
import {NotFound} from "./pages/NotFound";
import {Layout} from "./components/Layout";
import {Profile} from "./pages/Profile";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/post/:id" element={<FullPost />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/not-found" element={<NotFound />}/>
                    <Route path="*" element={<Navigate to="/not-found"/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App;