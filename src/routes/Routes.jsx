import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <p className="font-bold text-4xl text-center mt-20 border border-black rounded-md p-4 ">Error...404</p>,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/header',
                // element: <Header />
            },
            {
                path: '/about',
                // element: <About />
            }
        ]
    }
])