import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Employee } from './Employees';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';


export const EmployeeCard = ({employee}:{employee:Employee}) => {

    return (
        <>
        <ListItem  className='flex'>
            <ListItemAvatar>
                <Avatar>
                    <AccountCircleOutlinedIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={employee.name} secondary={employee.roles} />
        </ListItem>
        </>
    )
}