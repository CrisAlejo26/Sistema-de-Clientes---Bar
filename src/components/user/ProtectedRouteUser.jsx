import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRouteUser = ({children}) => {

    const {tableSelect} = useSelector(state => state.user)
    if (tableSelect === "") {
        return <Navigate to={"/"}/>
    }
    return (
        <Outlet/>
    )
}
