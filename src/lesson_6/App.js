import React from "react";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import {FullPost} from "./pages/FullPost";

function App() {
    const pathname = window.location.pathname;
    const postId = pathname.split('/post/')[1];

    return (
        <>
            <Header />
            {pathname === "/" && <Home />}
            {pathname === "/about" && <About />}
            {pathname === "/login" && <h1>Логин</h1>}
            {postId && <FullPost id={postId}/>}
            <Footer />
        </>
    );
}

export default App;