import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

const copyright = String.fromCharCode(8381);

interface ProductsProps {
    image: any
    code: number
    cost: number
}

const arrayData = [
    {
        pathImg: `${process.env.PUBLIC_URL}/static/`
    },
]


const Products = (props: ProductsProps) => {

    console.log(props.image)

    


    return <Box
        sx={{
            width: "1000px",
            display: "flex",
        }}
    >
        {
            arrayData.map((item, key) => (
                <Box sx={{
                    border: "1px solid black",
                    width: "250px",
                    height: "250px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    {props.image} {props.cost}, {props.code}
                </Box>
            ))
        }

    </Box>


}


export default Products