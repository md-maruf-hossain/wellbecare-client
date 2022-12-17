import { createBrowserRouter } from "react-router-dom";
import Error404 from "../../Error404/Error404";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointments/Appointment/Appointment";
import MyAppointments from "../../Pages/DashBoard/MyAppointments/MyAppointments";
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
            },
            {
                path:'*',
                element: <Error404/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path: '/dashboard/',
                element: <MyAppointments/>
            }
        ]
    }
])

export default router;