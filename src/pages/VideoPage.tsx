import {useCreateCommentMutation, useGetOneVideoQuery, useGetVideosQuery} from "../api/api.ts";
import {Link, useParams} from "react-router-dom";
import UserProfile from "../components/UserProfile.tsx";
import Comment from "../components/Comment.tsx";
import {useState} from "react";
import {useGetUser} from "../hooks/useGet.ts";
import {IComments} from "../global-types/global-types.ts";

const VideoPage = () => {
    const {id} = useParams()
    const {data} = useGetOneVideoQuery(id)
    const {currentData} = useGetVideosQuery([])
    const [title, setTitle] = useState('')
    const {user} = useGetUser()
    const [send] = useCreateCommentMutation()
    const sendMessage = async () => {
        const initialState: IComments = {
            title: title,
            username: user.username,
            userId: user.id
        }
        title !== '' ? data ? await send({...data, comments: [...data.comments, initialState]}) : alert('Повторите запрос') : alert('Введите текст')
    }

    return (
        <div className='grid grid-cols-2 mb-6'>
            <div className='col-span-2'>
                {
                    data
                        ? <div>
                            <iframe className='w-full h-[774px]' src={data.video + '?autoplay=1&mute=0'}
                                    allowFullScreen={true}></iframe>
                            <div className='flex mt-5'>
                                <div>
                                    <UserProfile id={data.userId}/>
                                </div>
                                <div className='flex text-xl items-center ml-44'>
                                    <button>
                                        <svg width="20" height="20" viewBox="0 0 30 26"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.9508 25.4304C14.5553 25.4314 14.1635 25.3541 13.7979 25.2031C13.4324 25.0521 13.1003 24.8303 12.8208 24.5504L2.52079 14.2504C1.70713 13.4279 1.06528 12.4517 0.632638 11.3787C0.199995 10.3057 -0.0147917 9.15727 0.000791025 8.00041C0.00863074 6.94025 0.22555 5.89205 0.639123 4.91585C1.0527 3.93966 1.6548 3.05465 2.41094 2.31151C3.16708 1.56837 4.0624 0.981714 5.04563 0.585137C6.02885 0.18856 7.08065 -0.0101431 8.14079 0.000408903C9.2199 -0.0104609 10.2902 0.195485 11.2882 0.606032C12.2863 1.01658 13.1917 1.62337 13.9508 2.39041L14.9508 3.39041L15.7708 2.57041C17.1867 1.11698 19.0814 0.225922 21.1039 0.0622833C23.1264 -0.101355 25.1396 0.473512 26.7708 1.68041C27.6993 2.39546 28.4648 3.30013 29.0164 4.33417C29.5679 5.36821 29.8928 6.5079 29.9695 7.67733C30.0461 8.84676 29.8727 10.0191 29.4608 11.1163C29.049 12.2135 28.408 13.2103 27.5808 14.0404L17.0808 24.5504C16.8013 24.8303 16.4692 25.0521 16.1037 25.2031C15.7381 25.3541 15.3463 25.4314 14.9508 25.4304ZM8.10079 1.99041C6.51131 1.98879 4.98355 2.60563 3.84079 3.71041C3.25819 4.27095 2.79488 4.94346 2.47869 5.68754C2.1625 6.43162 1.99994 7.23193 2.00079 8.04041C1.99203 8.92972 2.15988 9.81193 2.49461 10.6359C2.82934 11.4598 3.3243 12.2092 3.95079 12.8404L14.2508 23.1404C14.3438 23.2341 14.4544 23.3085 14.5762 23.3593C14.6981 23.4101 14.8288 23.4362 14.9608 23.4362C15.0928 23.4362 15.2235 23.4101 15.3454 23.3593C15.4672 23.3085 15.5778 23.2341 15.6708 23.1404L26.1808 12.6204C26.7977 11.9904 27.2744 11.2371 27.5794 10.4098C27.8845 9.58253 28.011 8.70008 27.9508 7.82041C27.8974 6.93172 27.6526 6.06507 27.2332 5.27976C26.8138 4.49445 26.2297 3.80903 25.5208 3.27041C24.2769 2.3533 22.7421 1.91966 21.2022 2.05029C19.6623 2.18091 18.2224 2.86689 17.1508 3.98041L15.6608 5.51041C15.5678 5.60414 15.4572 5.67853 15.3354 5.7293C15.2135 5.78007 15.0828 5.80621 14.9508 5.80621C14.8188 5.80621 14.6881 5.78007 14.5662 5.7293C14.4444 5.67853 14.3338 5.60414 14.2408 5.51041L12.5408 3.81041C11.3699 2.64969 9.7895 1.99598 8.14079 1.99041H8.10079Z"
                                                fill="#787878"/>
                                        </svg>
                                    </button>
                                    <p className='ml-2'>{data.like}</p>
                                </div>
                            </div>
                        </div>
                        : <></>
                }
            </div>
            <div className='flex col-span-2  items-center w-full mt-4 mb-4'> <p className='text-xl w-60'>Популярные видео</p> <div className='flex w-full h-0.5 bg-[#595959] ml-4'></div></div>
            <div className='col-span-2 flex -ml-6'>
                {currentData
                    ? currentData.slice(0, 5).map(el => <Link className='block w-[300px] mt-2 first:mt-2 ml-5'
                                                  to={`/video/${el.id}`}>
                        <img className='block rounded-md' src={el.image} alt=""/>
                        <p className='block mt-2'>{el.title}</p>
                    </Link>)
                    : <></>}
            </div>
            <div className='col-span-3'>
                <div className='flex items-center text-xl mt-4 mb-4'>Комментарии <div className='flex w-full h-0.5 bg-[#595959] ml-4'></div></div>
                <input value={title} onChange={e => setTitle(e.target.value)} className='px-2 py-1 rounded-md outline-0 text-black' placeholder='Введите текст' type="text"/>
                <button className='bg-[#242424] p-2 rounded-md ml-2' onClick={sendMessage}>Отправить</button>
                <div>
                    {data?.comments.length ? data?.comments.map(el => <Comment key={el.id} userId={el.userId} title={el.title} username={el.username} />).reverse() : <span className='flex text-xl mt-5 mb-10'>Тут пока ничего нету, будьте первым</span>}
                </div>
            </div>
        </div>
    );
};

export default VideoPage;