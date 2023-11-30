import { createBrowserRouter } from "react-router-dom";
import FormLayout from "@layouts/FormLayout";
import Login from "@components/Login";
import Register from "@components/Register";
import Dashboard from "@pages/Dashboard";
import NotFound from "@pages/NotFound";


const router = createBrowserRouter([
    {
        element: <FormLayout/>,
        children: [
            {
                path: "/",
                element: <Login />,
                errorElement: <Login />,
            },
            {
                path: "register",
                element: <Register />,
                errorElement: <Register />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router