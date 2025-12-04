import { Box, Button } from "@mui/material"

interface numpadProps {
    num: number,
    back: (value: number) => void;
}


const SwitchNumpad = (props: numpadProps) => {
    const test = (t: number) => {

        props.back(t);
    }


    return <Button onClick={() => test(props.num)} className="main-buttons">
            {props.num}
        </Button>
}


export default SwitchNumpad