import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";


export const useGetUser = () => {
    return useSelector((state: RootState) => state.user)
}