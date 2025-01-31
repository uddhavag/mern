import { NavLink,Navigate,Outlet } from "react-router-dom";
import { FaUser,FaHome,FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";


export const AdminLayout = () =>{
    const { user, isLoading } = useAuth();
console.log("admin layout",user);

if(isLoading){
  return<h1>Loading...</h1>
}

if(!user.isAdmin){
   return <Navigate to="/"/>;
}
    return <>
    <header>
        <div className="container">
        <nav>
            <ul>
                <li><NavLink to ="/admin/Users">users<FaUser /></NavLink></li>
                <li><NavLink to ="/admin/contacts">contacts<FaMessage /></NavLink></li>
                <li><NavLink to ="/">Home<FaHome /></NavLink></li>
                <li><NavLink to ="/service">Services<FaRegListAlt /></NavLink></li>
            </ul>
        </nav>
        </div>
    </header>
    <Outlet/>
    </>
};