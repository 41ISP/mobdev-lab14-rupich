import { createBrowserRouter } from "react-router-dom"
import SingUp from "../pages/SingUp/SingUp"
import SignIn from "../pages/Signin/Signin"
import Loyout from "../components/Loyout/Loyout"
import Board from "../pages/Board/Board"
import MyMessages from "../pages/MyMessages"
import AuthGuard from "../components/AuthGuard"
import Logout from "../pages/Logout"


export const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SingUp />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/logout",
        element:<Logout />
    },
    {
        path: "/",
        element: <Loyout/>,
        children: [{index: true, element: <Board />},
            {
                path: "my-messages",
                element: 
                <AuthGuard>
                <MyMessages/>
                </AuthGuard>
            },
        ],
    },
],
)