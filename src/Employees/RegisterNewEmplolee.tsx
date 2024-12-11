import { Box, Button, MenuItem, TextField } from "@mui/material"
import {  useState } from "react"
import { saveUser } from "../APIs/AuthAPI";


export const RegisterNewEmployee = ({parentOrg}:{parentOrg:string}) => {

    const [name,setName ] = useState("");
    const [lastName,setLastName ] = useState("");
    const [middleName,setMiddleName ] = useState("");
    const [email,setEmail ] = useState("");
    const [password,setPassword ] = useState("");
    const [repeatPassword,setRepeatPassword ] = useState("");

    const [nameError,setNameError ] = useState("");
    const [lastNameError,setLastNameError ] = useState("");
    const [middleNameError,setMiddleNameError ] = useState("");
    const [emailError,setEmailError ] = useState("");
    const [passwordError,setPasswordError ] = useState("");
    const [repeatPasswordError,setRepeatPasswordError ] = useState("");



    const style = "w-full "
    const rowStyle = "mt-5 "
    const roles = ["inventarios","cuetnas"]

    const  validateName = (nameInput:string):boolean => {
        if(nameInput.split("").length > 10){
            setNameError("nombre muy largo");
            return false;
        }
        setNameError("");
        setName(nameInput);
        return true;
    }

    const  validateLastName = (lastNameInput:string):boolean => {
        if(lastNameInput.split("").length > 10){
            setLastNameError("apellido");
            return false;
        }
        setLastNameError("");
        setLastName(lastNameInput);
        return true;
    }
    const  validatemiddleName = (middleNameInput:string):boolean => {
        if(middleNameInput.split("").length > 10){
            setNameError("apellido");
            return false;
        }
        setMiddleNameError("");
        setMiddleName(middleNameInput);
        return true;
    }
    const  validateEmail = (emailInput:string):boolean => {
        setEmail(emailInput);
        setEmailError("");
        return true;
    }
    const  validatePassword = (passwordInput:string):boolean => {
        setPassword(passwordInput)
        if(repeatPassword) validateRepeatPassword(passwordInput,repeatPassword);
        setPasswordError("");
        return true;
    }
    const  updateRepeatPassword = (passwordInput:string):void => {
        setRepeatPassword(passwordInput);
        validateRepeatPassword(password,passwordInput);
        
    }

    const validateRepeatPassword = (passwordOrgin:string, passwordCopy:string):boolean => {
        if(!passwordCopy){
            setRepeatPasswordError("");
            return false;
        }
        if(passwordOrgin !== passwordCopy){
            setRepeatPasswordError("Las contraseñas son diferentes");
            return false;
        };
        setRepeatPasswordError("");
        return true;
    }

    const validate = () => {
        saveUser({
            organizationName:parentOrg,
            email:email, 
            password:password, 
            name:name, 
            middleName:middleName, 
            lastName:lastName
        });
    }

    return(

        <Box 
            className={"mx-auto w-fit p-5 "} 
            sx={{width:{md:"60vw", sm:"70vw", xs:"80vw"}, bgcolor: 'background.paper'}}
        >
            <div className={rowStyle}>
                <TextField  
                    error={nameError!==""}
                    onChange={(e) => validateName(e.target.value)}
                    value={name}
                    className={style}
                    id="register-name"
                    label="Nombre"
                    helperText={nameError}
                />
            </div>
                <Box className={"flex gap-5 flex-wrap justify-between " + rowStyle}
                    sx={{gap:{lg:0}}}
                >
                    <TextField 
                        onChange={(e) => validateLastName(e.target.value)} 
                        value={lastName} 
                        className={style}
                        sx={{width:{lg:"49%"}}}
                        error={lastNameError!==""}
                        id="register-last-name"
                        label="Apellido Paterno"
                        helperText={lastNameError}
                    />
                    <TextField  
                        onChange={(e) => validatemiddleName(e.target.value)}
                        value={middleName}
                        className={style + rowStyle}
                        sx={{width:{lg:"49%"}}}
                        error={middleNameError!==""}
                        id="register-second-last-name"
                        label="Apellido Materno"
                        helperText={middleNameError}
                    />
                </Box>
                <div className={rowStyle}>
                <TextField  
                    type="email"
                    onChange={(e) => validateEmail(e.target.value)}
                    value={email}
                    className={style}
                    error={emailError!==""}
                    id="register-email"
                    label="Correo"
                    helperText={emailError}
                />
                </div>
                <div className={rowStyle}>
                <TextField  
                    type="password"
                    onChange={(e) => validatePassword(e.target.value)}
                    value={password}
                    className={style}
                    error={passwordError!==""}
                    id="register-password"
                    label="Contraseña"
                    helperText={passwordError}
                />
                </div>
                <div className={rowStyle}>
                <TextField  
                    type="password"
                    onChange={(e) => updateRepeatPassword(e.target.value)}
                    value={repeatPassword}
                    className={style}
                    error={repeatPasswordError!==""}
                    id="register-password-repeat"
                    label="Repita su contraseña"
                    helperText={repeatPasswordError}
                />
                </div>
                <div className={rowStyle}>
                <TextField
                className={style}
                    id="register-role"
                    select
                    label="rol"
                    defaultValue={roles[0]}
                    helperText="Seleccione el rol"
                    >
                    {roles.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                </TextField>
                </div>
                <div className={"mx-auto w-full "+ rowStyle}>
                    <Button variant="outlined"
                    onClick={validate}
                        sx={{width:"100%", py:2}}
                    >
                        Registrar
                    </Button>
                </div>
        </Box>
    )
}