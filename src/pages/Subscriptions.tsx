import {useGetUser} from "../hooks/useGet.ts";
import {Link} from "react-router-dom";


const Subscriptions = () => {
    const {user} = useGetUser()
    return (
        <>
            <div className='flex items-center'><p className='flex text-xl'>Подписки</p>
                <div className='flex w-96 h-0.5 bg-[#595959] ml-4'></div>
            </div>
            <div className='mt-4'>
                {
                    user.subscriptions ? user.subscriptions.map(item => <Link className='bg-[#222222] p-2 rounded-md mt-2'
                                                                              key={item.id}
                                                                              to={`/user/${item.userId}`}>{item.username}</Link>)
                        :
                        <>Ничего нету</>
                }
            </div>
        </>
    );
};

export default Subscriptions;