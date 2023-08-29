import {FC, useEffect, useState} from "react";
import {useGetAddSubMutation, useGetOneUserQuery} from "../api/api.ts";
import {IDid} from "../global-types/global-types.ts";
import {useGetUser} from "../hooks/useGet.ts";
import {Link} from "react-router-dom";

interface UserProfileProps {
    id: number | undefined
}

const UserProfile: FC<UserProfileProps> = ({id}) => {
    const {data} = useGetOneUserQuery(String(id))
    const [addSub] = useGetAddSubMutation()
    const [onSub, setOnSub] = useState(false)
    const pathname = location.pathname
    const {user} = useGetUser()
    console.log(pathname)
    useEffect(() => {
        if (data?.subscribers.find(el => el.userId === user.id)) {
            setOnSub(true)
        }
    }, [data]);
    const sub = async () => {
        if (onSub) {
            alert('Вы уже подписаны')
        } else {
            const initialSub: IDid = {
                userId: user.id,
                username: user.username
            }
            const initialSubTw: IDid = {
                userId: data?.id,
                username: data?.username
            }
            data ? await addSub({
                ...data,
                subscribers: [...data.subscribers, initialSub]
            }).then(() => setOnSub(true)).then(() => addSub({
                ...user,
                subscriptions: [...user.subscriptions, initialSubTw]
            })) : alert('Повторите запрос')
            console.log(data)
        }
    }
    return (
        <>
            {
                data
                    ?
                    <div>
                        <div className='flex items-center'>
                            {
                                pathname === `/user/${id}`
                                    ? <div className='flex items-center'>
                                        <p>@{data.username}</p>
                                        {
                                            data.id === user.id ?
                                                <button className='bg-[#222222] p-2 rounded-md ml-2'>Это ваш
                                                    аккаунт</button> :
                                                onSub ?
                                                    <button onClick={sub} className='bg-[#222222] p-2 rounded-md ml-2'>Вы
                                                        уже
                                                        подписаны</button> : <button onClick={sub}
                                                                                     className='bg-[#242424] p-2 rounded-md ml-2'>Подписаться</button>
                                        }
                                    </div>
                                    : <div>
                                        <Link to={`/user/${data.id}`}>@{data.username}</Link>
                                        {
                                            data.id === user.id ?
                                                <button className='bg-[#222222] p-2 rounded-md ml-2'>Это ваш
                                                    аккаунт</button> :
                                                onSub ?
                                                    <button onClick={sub} className='bg-[#222222] p-2 rounded-md ml-2'>Вы
                                                        уже
                                                        подписаны</button> : <button onClick={sub}
                                                                                     className='bg-[#242424] p-2 rounded-md ml-2'>Подписаться</button>
                                        }
                                    </div>
                            }

                        </div>
                        <span className='text-[#888888]'>Подписчиков: {data.subscribers.length}</span>
                    </div>
                    :
                    <></>
            }
        </>
    );
};

export default UserProfile;