import {useGetUser} from "../hooks/useGet.ts";
import {Link} from "react-router-dom";
import {REACT_ROUTER_HOME, REACT_ROUTER_LOGIN, REACT_ROUTER_REGISTRATION} from "../utils/utils.ts";
import {useActions} from "../hooks/useActions.ts";
import {useGetVideosQuery} from "../api/api.ts";
import {SetStateAction, useEffect, useState} from "react";
import {IVideos} from "../global-types/global-types.ts";


const Header = () => {
    const {user} = useGetUser()
    const {setUser} = useActions()
    const {data} = useGetVideosQuery([])
    const [search, setSearch] = useState('')
    const [video, setVideo] = useState<IVideos[]>()
    const logout = () => {
        setUser({})
        localStorage.setItem('token', '')
    }
    useEffect(() => {
        const Debounce = setTimeout(() => {
            if (!search) {
                return video
            } else {
                const newSearchVideo: SetStateAction<IVideos[]> | SetStateAction<undefined> = data?.filter(({title}) => title.toLowerCase().includes(search.toLowerCase()))
                setVideo(newSearchVideo)
            }
        }, 300)
        return () => clearTimeout(Debounce)
    }, [search]);
    console.log(video)
    return (
        <div className='flex justify-between items-center px-10 py-2'>
            <Link className='bg-[#222222] p-2 rounded-md' to={REACT_ROUTER_HOME}>Youtube</Link>
            <div>
                <input value={search} onChange={e => setSearch(e.target.value)}
                       className='relative w-96 bg-[#222222] p-2 rounded-md outline-0' type="text" placeholder='Поиск'/>
                {
                    !search ? <></> : <div className='absolute bg-[#171717] w-96 rounded-md mt-2 px-4 py-3'>
                        {video?.map(item => <Link className='block mt-2 bg-[#242424] rounded-md px-2 py-1' to={`/video/${item.id}`}>{item.title}</Link>)}
                    </div>
                }
            </div>
            {user.username
                ?
                <div>
                    <Link className='bg-[#222222] p-2 rounded-md ml-2' to={`/user/${user.id}`}>{user.username}</Link>
                    <button className='bg-[#222222] p-2 rounded-md ml-2' onClick={logout}>Выйти</button>
                </div>
                :
                <div>
                    <Link className='bg-[#222222] p-2 rounded-md ml-2' to={REACT_ROUTER_LOGIN}>Вход</Link>
                    <Link className='bg-[#222222] p-2 rounded-md ml-2' to={REACT_ROUTER_REGISTRATION}>Регистрация</Link>
                </div>
            }

        </div>
    );
};

export default Header;