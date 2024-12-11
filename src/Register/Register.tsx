import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { saveUser } from "../APIs/AuthAPI";



export const Register = () => {

    const [organizationName,setOrganizationName ] = useState("");
    const [name,setName ] = useState("");
    const [lastName,setLastName ] = useState("");
    const [middleName,setMiddleName ] = useState("");
    const [email,setEmail ] = useState("");
    const [password,setPassword ] = useState("");
    const [repeatPassword,setRepeatPassword ] = useState("");

    const [emailError,setEmailError ] = useState("");
    const [passwordError,setPasswordError ] = useState("");
    const [repeatPasswordError,setRepeatPasswordError ] = useState("");




    const style = "w-full "
    const rowStyle = "mt-5 "

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
            organizationName:organizationName,
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
                    onChange={(e) => setOrganizationName(e.target.value)}
                    slotProps={{htmlInput:{maxLength:30}}}
                    value={organizationName}
                    className={style}
                    id="register-organization"
                    label="Nombre de la organizacion"
            />
            </div>
            <div className={rowStyle}>
                <TextField  
                    onChange={(e) => setName(e.target.value)}
                    slotProps={{htmlInput:{maxLength:30}}}
                    value={name}
                    className={style}
                    id="register-name"
                    label="Nombre"
                />
            </div>
                <Box className={"flex gap-5 flex-wrap justify-between " + rowStyle}
                    sx={{gap:{lg:0}}}
                >
                    <TextField 
                        onChange={(e) => setLastName(e.target.value)} 
                        slotProps={{htmlInput:{maxLength:30}}}
                        value={lastName} 
                        className={style}
                        sx={{width:{lg:"49%"}}}
                        id="register-last-name"
                        label="Apellido Paterno"
                    />
                    <TextField  
                        onChange={(e) => setMiddleName(e.target.value)}
                        slotProps={{htmlInput:{maxLength:30}}}
                        value={middleName}
                        className={style + rowStyle}
                        sx={{width:{lg:"49%"}}}
                        id="register-second-last-name"
                        label="Apellido Materno"
                    />
                </Box>
                <div className={rowStyle}>
                <TextField  
                    type="email"
                    slotProps={{htmlInput:{maxLength:100}}}
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
                    slotProps={{htmlInput:{maxLength:30}}}
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
                    slotProps={{htmlInput:{maxLength:30}}}
                    onChange={(e) => updateRepeatPassword(e.target.value)}
                    value={repeatPassword}
                    className={style}
                    error={repeatPasswordError!==""}
                    id="register-password-repeat"
                    label="Repita su contrasena"
                    helperText={repeatPasswordError}
                />
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