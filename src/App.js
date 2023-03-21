import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import { fetchUser } from "./redux/slices/userSlice";

import ThemeRoutes from "./routes/Router";

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])

    const routing = useRoutes(ThemeRoutes);
    return routing;
}