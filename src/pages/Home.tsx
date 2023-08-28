import {useGetVideosQuery} from "../api/api.ts";
import VideoCover from "../components/VideoCover.tsx";


const Home = () => {
    const {data} = useGetVideosQuery([])
    return (
        <div className='grid grid-cols-4 gap-9'>
            {
                data
                    ?
                    data.map(el => <VideoCover key={el.id} userId={el.userId} title={el.title} likes={el.like} id={el.id} image={el.image}/>)
                    :
                    <p>Ничего не найдено</p>
            }

        </div>
    );
};

export default Home;