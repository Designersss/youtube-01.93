import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import {
    REACT_ROUTER_HOME,
    REACT_ROUTER_LOGIN,
    REACT_ROUTER_REGISTRATION, REACT_ROUTER_SUBSCRIBERS, REACT_ROUTER_SUBSCRIPTIONS, REACT_ROUTER_USER,
    REACT_ROUTER_VIDEO_PAGE
} from "../utils/utils.ts";
import Login from "../pages/Login.tsx";
import VideoPage from "../pages/VideoPage.tsx";
import User from "../pages/User.tsx";
import Subscribers from "../pages/Subscribers.tsx";
import Subscriptions from "../pages/Subscriptions.tsx";

const Router = () => {
    return (
        <Routes>
            <Route path={REACT_ROUTER_HOME} element={<Home/>} />
            <Route path={REACT_ROUTER_LOGIN} element={<Login/>} />
            <Route path={REACT_ROUTER_REGISTRATION} element={<Login/>} />
            <Route path={REACT_ROUTER_VIDEO_PAGE} element={<VideoPage/>} />
            <Route path={REACT_ROUTER_USER} element={<User/>} />
            <Route path={REACT_ROUTER_SUBSCRIBERS} element={<Subscribers/>} />
            <Route path={REACT_ROUTER_SUBSCRIPTIONS} element={<Subscriptions/>} />
        </Routes>
    );
};

export default Router;