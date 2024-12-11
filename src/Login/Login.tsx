import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { loginUser } from "../APIs/AuthAPI";
import { Link } from "react-router-dom";
import { updateUserAction } from "../Redux/UserSlice";
import { useDispatch } from "react-redux";

export const Login = () => {

    const style = "w-full "
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const distpactch = useDispatch();


    const emailValidate = (email:string) => {
        setEmail(email);
    }

    const passwordValidate = (password:string) => {
        setPassword(password);
    }


    const login = async () => {
        const user = await loginUser(email, password);
        if(user?.data !== ""){
            distpactch(updateUserAction({logged:true}));
        }
    }


    return (
        <Box
        className="mt-24 mx-auto text-center" 
        sx={{width:{md:"30%", sm:"50%", xs:"80%"}}}
        >
            <TextField
                        value={email}
                        margin="normal"
                        className={style}
                        error={false}
                        id="login-email"
                        label="email"
                        helperText=""
                        onChange={(e) => emailValidate(e.target.value)}
                    />
            <TextField
                        value={password}
                        type="password"
                        margin="normal"
                        className={style}
                        error={false}
                        id="login-password"
                        label="password"
                        helperText=""
                        onChange={(e) => passwordValidate(e.target.value)}
            />
            <div className="mt-2">
            <Button onClick={login} className="w-52" size="large" variant="contained">Iniciar sesion</Button>
            </div>
            <p className="mt-2">o</p>
            <div className="mt-2">
            <Link to={"/register"}>
                <Button className="w-52 my-16" size="large"  variant="outlined">Registrarse</Button>
            </Link>
            </div>
            <div className="mt-4"   >
            <Button className="w-52" size="large"  variant="outlined">Inicio con Google</Button>
            </div>
        </Box>
    )
}

