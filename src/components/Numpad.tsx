import { Button } from "@mui/material"

interface numpadProps {
    num: number,
    back: (value: number) => void;
}


const Numpad = (props: numpadProps) => {
    const test = (t: number) => {

        props.back(t);
    }


    return <Button onClick={() => test(props.num)} className="main-buttons">
        {props.num}
    </Button>
}


export default Numpad