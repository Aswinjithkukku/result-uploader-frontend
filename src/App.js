import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useRoutes } from "react-router-dom";
import { fetchUser } from "./redux/slices/userSlice";

import ThemeRoutes from "./routes/Router";

export default function App() {
    const dispatch = useDispatch()

    const { isLoading } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])

    const routing = useRoutes(ThemeRoutes);
    return isLoading ? <p>Loading......</p> : routing;
}