import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import {REACT_ROUTER_HOME, REACT_ROUTER_LOGIN, REACT_ROUTER_REGISTRATION} from "../utils/utils.ts";
import Login from "../pages/Login.tsx";

const Router = () => {
    return (
        <Routes>
            <Route path={REACT_ROUTER_HOME} element={<Home/>} />
            <Route path={REACT_ROUTER_LOGIN} element={<Login/>} />
            <Route path={REACT_ROUTER_REGISTRATION} element={<Login/>} />
        </Routes>
    );
};

export default Router;