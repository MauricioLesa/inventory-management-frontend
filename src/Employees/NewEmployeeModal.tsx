import { Card, Modal } from "@mui/material"
import { RegisterNewEmployee } from "./RegisterNewEmplolee";

export const NewEmployeeModal = ({open, handleClose}:{open:boolean, handleClose:()=>void}) => {

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Card className="w-fit mx-auto mt-24 h-fit">
            <RegisterNewEmployee parentOrg="parent org"/>
            </Card>
        </Modal>
    )
}