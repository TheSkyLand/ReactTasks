import { Box, Modal, Typography } from "@mui/material";

interface ModalElProps {
    open: boolean,
    handleClose: () => void;
    output: {
        name: string,
        code: number,
        cost: number,
        img: string
    }
}

const ModalEl = (props: ModalElProps) => {
    return <Modal
        open={props.open}
        onClose={props.handleClose}
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }}
        >
            <Typography>выдан товар {`${props.output.name} ${props.output.code}  ${props.output.cost} ${props.output.img}`}</Typography>
        </Box>
    </Modal>
}

export default ModalEl;