import {BrowserRouter} from "react-router-dom";
import Router from "./routes/Router.tsx";
import Header from "./components/Header.tsx";
import {useEffect} from "react";
import {useGetUserQuery} from "./api/api.ts";
import {useActions} from "./hooks/useActions.ts";
import LeftMenu from "./components/LeftMenu.tsx";

function App() {
    const {data} = useGetUserQuery([])
    const {setUser} = useActions()
    useEffect(() => {
        const candidate = data?.find(el => el.email === localStorage.getItem('token'))
        if (candidate?.email){
            setUser(candidate)
        }
    }, [data]);
    return (
        <BrowserRouter>
            <Header/>
            <div className='flex'>
                <LeftMenu />
                <div className='ml-8 mr-8'>
                    <Router/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
