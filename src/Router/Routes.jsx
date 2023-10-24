import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { HeroesApp } from "../HeroesApp";

import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage, MarvelPage } from "../heroes/pages";
import { Heroes } from "../heroes/pages/Heroes";
import { Search } from "../heroes/pages/Search";

export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/marvel'} />
            },
            {
                path: "dc",
                element: <DcPage/>,
            },
            {
                path: "/marvel",
                element: <MarvelPage/>
            },
            {
                path: "/search",
                element: <Search/>
            },
            {
                path: "/hero/:id",
                element: <Heroes/>
            },
            {
                path: "/*",
                element: <Navigate to={<HeroesApp/>}/>
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
        ]
    },
]);