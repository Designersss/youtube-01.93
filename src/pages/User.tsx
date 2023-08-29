import {useParams} from "react-router-dom";
import {useGetOneUserQuery, useGetUserVideoQuery} from "../api/api.ts";
import UserProfile from "../components/UserProfile.tsx";
import VideoCover from "../components/VideoCover.tsx";

const User = () => {
    const {id} = useParams()
    const {data} = useGetOneUserQuery(id)
    const {currentData} = useGetUserVideoQuery(id)
    console.log(currentData)
    return (
        <>
            {
                data ? <div>
                    <UserProfile id={data.id} />
                </div>
                    : <>Loading...</>
            }
            <div className='mt-8'>
                <div className='flex items-center'><p className='flex text-xl'>Видео</p><div className='flex w-full h-0.5 bg-[#595959] ml-4'></div></div>
                <div  className='grid grid-cols-4 gap-9 mt-8'>
                    {currentData?.length ? currentData.map(el => <VideoCover key={el.id} userId={el.userId} title={el.title} likes={el.like} id={el.id} image={el.image}/>) : <>Этот пользователь еще не выложил видео</>}
                </div>
            </div>
        </>
    );
};

export default User;