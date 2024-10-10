import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Config from "./pages/config/Config"


function AppRoutes(){
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/config/" element={<Config/>}></Route>

           
           </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;