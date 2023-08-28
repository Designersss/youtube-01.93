import {REACT_ROUTER_HOME, REACT_ROUTER_LOGIN, REACT_ROUTER_REGISTRATION} from "../utils/utils.ts";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCreateUserMutation, useGetUserQuery} from "../api/api.ts";
import {useActions} from "../hooks/useActions.ts";
import {IUser} from "../global-types/global-types.ts";


const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const {setUser} = useActions()
    const navigate = useNavigate()
    const {data} = useGetUserQuery([])
    const [createUser] = useCreateUserMutation()


    const initialUser: IUser = {
        email: email,
        password: password,
        username: `userName-${Math.floor(Math.random() * 123)}`,
        subscriptions: [],
        subscribers: [],
        likeVideo: [],
    }

    const login = () => {
        if (password === '' || email === ''){
            alert('Введите данные')
        } else {
            if (data?.find(el => el.email === email)) {
                const candidate = data?.find(el => el.email === email)
                if (candidate?.password === password){
                    setUser(data[0])
                    localStorage.setItem('token', data[0].email)
                    navigate(REACT_ROUTER_HOME)
                } else {
                    alert('Не правильный пароль')
                }
            } else {
                alert('Пользователь не найден')
            }
        }
    }

    const registration = () => {
        if (password === '' || email === ''){
            alert('Введите данные')
        } else {
            if (data?.find(el => el.email === email)){
                alert('Такой пользователь уже существует')
            } else {
                createUser(initialUser).then(() => setUser(initialUser)).then(() => localStorage.setItem('token', initialUser.email)).then(() => navigate(REACT_ROUTER_HOME))
            }
        }
    }
    return (
        <div>
            <div>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="text"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="text"/>
            </div>
            {
                location.pathname === REACT_ROUTER_LOGIN
                    ?
                    <div>
                        <button onClick={login}>Войти</button>
                        <p>Нет аккаунта? <Link to={REACT_ROUTER_REGISTRATION}>Регистрация!</Link></p>
                    </div>
                    :
                    <div>
                        <button onClick={registration}>Регистрация</button>
                        <p>Есть аккаунт? <Link to={REACT_ROUTER_LOGIN}>Вход!</Link></p>
                    </div>
            }
        </div>
    );
};

export default Login;