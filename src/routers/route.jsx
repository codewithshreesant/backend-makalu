
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import SinglePlace from "../components/SinglePlace";
import BookNow from "../components/BookNow";

const router=createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact />
            },
            {
                path:'/BookNow/:id',
                element:<BookNow />
            }
        ]
    },

    {
        path:'/singlePlace/:id',
        element:<SinglePlace />
    }
])

export default router;