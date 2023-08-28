import {FC} from "react";
import {Link} from "react-router-dom";
import {useGetOneUserQuery} from "../api/api.ts";

interface VideoCoverProps {
    title: string,
    likes: number,
    id: number | undefined,
    userId: string | undefined,
    image: string
}

const VideoCover: FC<VideoCoverProps> = ({title, userId, id, likes, image}) => {
    const {data} = useGetOneUserQuery(userId as string)
    return (
        <Link to={`/video/${id}`}>
            <img className='rounded-xl' src={image} alt=""/>
            {
                data
                    ?
                    <object>
                        <Link to={`/user/${data.id}`} className='z-30'>@{data.username}</Link>
                    </object>
                    :
                    <p>Not found</p>
            }
            <div>
                <p>{title}</p>
                <p>{likes}</p>
            </div>
        </Link>
    );
};

export default VideoCover;