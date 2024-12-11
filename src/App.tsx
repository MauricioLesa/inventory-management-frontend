import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"
import { Employees } from "./Employees/Employees"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadUser } from "./APIs/AuthAPI"
import { updateUserAction } from "./Redux/UserSlice"
import { User } from "./User/User"
import { Inventory } from "./Inventory/Inventory"



const App = () => {

    const distpactch = useDispatch();

    const checkUser = async () => {
        let user = await loadUser();
        if(user?.data !== "" && user?.status === 200){
            distpactch(updateUserAction({logged:true}));
        }
        else{
            distpactch(updateUserAction({logged:false}));
        }
    }

    useEffect(() => {
        checkUser();
    },[])
 
    return(
        <div className="w-screen min-h-screen flex flex-col">
            <BrowserRouter>  
            <div className="h-16">
            <Navbar/>
            </div>
            <div className="flex-1">
                <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/user" element={<User/>} />
                <Route path="/inventory" element={<Inventory/>} />
                </Routes>
            </div>
            </BrowserRouter>
            <div className="h-20">
                footer
            </div>
        </div>
    )
}

export default App