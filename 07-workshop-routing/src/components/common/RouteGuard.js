import { useAuthContext } from "../../contexts/AuthContexts";
import { Navigate, Outlet } from "react-router-dom";

// export const RouteGuard = ({ children }) => {
//     const { isAuthenticated } = useAuthContext();

//     if (!isAuthenticated) {
//         return <Navigate to="/login" />
//     }

//     return (
//         <>
//             {children}
//         </>
//     )
// }
export const RouteGuard = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    };

    return children ? children : < Outlet />
    
}