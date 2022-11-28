import React from "react";

import {Routes, Route, Navigate} from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import {FullPost} from "./pages/FullPost";
import {NotFound} from "./pages/NotFound";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<h1>Логин форма</h1>}/>
                <Route path="/post/:id" element={<FullPost />}/>
                <Route path="/not-found" element={<NotFound />}/>
                <Route path="*" element={<Navigate to="/not-found"/>}/>
            </Routes>
             <Footer />
        </>
    );
}

export default App;