import {useGetOneVideoQuery, useGetVideosQuery} from "../api/api.ts";
import {Link, useParams} from "react-router-dom";
import {REACT_ROUTER_VIDEO_PAGE} from "../utils/utils.ts";

const VideoPage = () => {
    const {id} = useParams()
    const {data} = useGetOneVideoQuery(id)
    console.log(data)
    const {currentData} = useGetVideosQuery([])
    console.log(currentData)
    return (
        <div>
            <div className='flex'>
                <div>
                    {
                        data ? <iframe className='w-[1340px] h-[755px]' src={data.video + '?autoplay=1&mute=0'}></iframe> : <></>
                    }
                </div>
                <div className='ml-14'>
                    { currentData ? currentData.map(el => <Link className='flex w-[300px] first:mt-0 mt-7' to={`/video/${el.id}`}><img className='rounded-md' src={el.image} alt=""/></Link>) : <></> }
                </div>
            </div>
        </div>
    );
};

export default VideoPage;