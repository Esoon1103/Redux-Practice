import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import FavouriteDogs from "../components/FavouriteDog"
import Header from "../components/Header"

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/favouriteDogs" element={<FavouriteDogs/>}/>
        </Routes>
    </BrowserRouter>
)

export default AppRouter