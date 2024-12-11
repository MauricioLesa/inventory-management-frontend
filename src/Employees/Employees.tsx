import { EmployeeList } from "./EmployeeList"

export type Employee =  {
    name:string,
    roles:string,
    img:string,
}

export const Employees = () => {

    const employees:Employee[] = [
        {
            name:"Oscar Timoty",
            roles:"dsa",
            img:"",
        },
        {
            name:"Oscar Timoty",
            roles:"das",
            img:"",
        },
        {
            name:"Oscar Timoty",
            roles:"dsa",
            img:"",
        },
    ]


    return (
        <div className="w-full h-full mt-16">
            <EmployeeList employees={employees}  />
        </div>
    )
}

