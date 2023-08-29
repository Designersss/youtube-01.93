import {FC} from 'react';
import {Link} from "react-router-dom";
import {IComments} from "../global-types/global-types.ts";
interface CommentProps extends IComments{
    title: string,
    userId: number | undefined,
    username: string
}
const Comment:FC<CommentProps> = ({title, userId, username}) => {
    return (
        <div className='bg-[#242424] w-full p-2 rounded-md mt-4'>
            <Link to={`/user/${userId}`}>@{username}</Link>
            <span className='block ml-5'>{title}</span>
        </div>
    );
};

export default Comment;