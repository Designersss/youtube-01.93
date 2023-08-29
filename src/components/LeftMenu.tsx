import {Link} from "react-router-dom";
import {REACT_ROUTER_HOME, REACT_ROUTER_SUBSCRIBERS, REACT_ROUTER_SUBSCRIPTIONS} from "../utils/utils.ts";


const LeftMenu = () => {
    return (
        <div className='ml-3'>
            <Link className='flex justify-center px-12 py-2 bg-[#242424] mt-2 rounded-md' to={REACT_ROUTER_HOME}>Главная</Link>
            <Link className='flex justify-center px-12 py-2 bg-[#242424] mt-2 rounded-md' to={REACT_ROUTER_SUBSCRIPTIONS}>Подписки</Link>
            <Link className='flex justify-center px-12 py-2 bg-[#242424] mt-2 rounded-md' to={REACT_ROUTER_SUBSCRIBERS}>Подписчики</Link>
            <Link className='flex justify-center px-12 py-2 bg-[#242424] mt-2 rounded-md' to={REACT_ROUTER_HOME}>Понравившиеся</Link>
        </div>
    );
};

export default LeftMenu;