import ErrorPage from "../pages/ErrorPage";
import TodoPage from "../pages/TodoPage";


export const routes = [
    {
        path: "/",
        element: <TodoPage />,
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]