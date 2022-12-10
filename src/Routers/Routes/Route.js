import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointments/Appointment/Appointment";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard/></PrivateRoute>
    }
])

export default router;