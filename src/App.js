import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import User from "./components/User";
// import Grocery from "./components/Grocery";

const AppLayout = () => {

    // authentication

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Uday Teja",
        }
        setUserName(data.name);
    }, [])
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                {/* <UserContext.Provider value={{ loggedInUser: "Dummy" }}> */}
                    <Header />
                {/* </UserContext.Provider> */}
                <Outlet />
            </div>
        </UserContext.Provider>
    );
}

// Chunking | Lazy Loading | Code Splitting | Dynamic Import | React.lazy | on demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/restaurents/:resId",
                element: <RestaurentMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);