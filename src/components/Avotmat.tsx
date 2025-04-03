
interface AvtomatProps {
    code: number
    name: string
    price: number
}

const Avtomat = ({ code, name, price }: AvtomatProps) => {
    return (
        <div>
            <div style={{
                display: "flex", flexDirection: "column",
                width: "100px", height: "100px", border: "1px solid", margin: '10px'
            }}>
                <h1>object: {name}</h1>
                <span>price: {price}</span>
                <span style={{ border: "1px solid black" }} >{code}</span>
            </div>
        </div>

    )



}

export default Avtomat