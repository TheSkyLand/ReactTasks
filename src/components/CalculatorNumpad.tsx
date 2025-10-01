import { Button } from "@mui/material"

interface calculatorNumpadProps{
    num: number,
    back: (value: number) => void
}

const CalculatorNumpad = (props: calculatorNumpadProps) => {
    const provide = (t: number) => {
        props.back(t)
    }

    return <Button onClick={() => provide(props.num)} className="main-buttons">
            {props.num}
        </Button>
} 

export default CalculatorNumpad