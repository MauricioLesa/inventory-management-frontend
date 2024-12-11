import { connection } from "./AxiosConfig";

export type Employee =  {
    name:string,
    middleName:string,
    lastName:string,
    roles?:string,
    img?:string,
    organizationName:string,
    email:string,
    password?:string,

}


export const saveUser = async (employee:Employee) => {
    try {
        connection.post("/register",employee);
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (email:string, password:string) => {
    try {
        return await connection.post("/login",{email,password});
    } catch (error) {
        console.log(error);
    }
}

export const loadUser = async () => {
    try {
        return await connection.get("/load-user");
    } catch (error) {
        console.log(error);
    }
}