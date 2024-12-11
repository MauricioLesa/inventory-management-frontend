import { connection } from "./AxiosConfig";

export type Item =  {
    name:string,
    img:string,
    quantity:number,
}

export const saveItem = async(item:Item) => {
    try{
        return await connection.post("/items/save",item);
    }
    catch(err){
        console.log(err);
    }
}