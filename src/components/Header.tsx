import {useGetUser} from "../hooks/useGet.ts";
import {Link} from "react-router-dom";
import {REACT_ROUTER_HOME, REACT_ROUTER_LOGIN, REACT_ROUTER_REGISTRATION} from "../utils/utils.ts";
import {useActions} from "../hooks/useActions.ts";


const Header = () => {
    const {user} = useGetUser()
    const {setUser} = useActions()
    const logout = () => {
        setUser({})
        localStorage.setItem('token', '')
    }

    return (
        <div className='flex justify-between'>
            <Link to={REACT_ROUTER_HOME}>Youtube</Link>
            <div><input type="text" placeholder='Поиск'/></div>
            {user.username
                ?
                <div>
                    <Link to='/'>{user.username}</Link>
                    <button onClick={logout}>Выйти</button>
                </div>
                :
                <div>
                    <Link to={REACT_ROUTER_LOGIN}>Вход</Link>
                    <Link to={REACT_ROUTER_REGISTRATION}>Регистрация</Link>
                </div>
            }

        </div>
    );
};

export default Header;