import { Grid, useMediaQuery, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { products } from "../../data"
import SSingleProduct from "./SSingleProduct"
import SSingleProductDesktop from "./SSingleProductDesktop";

const Products = () => {

    const theme = useTheme();
    const matches =
        useMediaQuery(theme.breakpoints.down('md'));
    const renderProducts = products.map(product => (
        <Grid item
            key={product.id}
            xs={4}
            sm={4}
            md={3}
            display="flex"
            flex-Direction={"column"}
            alignItems={"center"}
        >,
            {matches? (<SSingleProduct product={product} matches={matches} />) :
            (<SSingleProductDesktop product={product} matches={matches} />) }
            
        </Grid>
    ))

    return (
        <Container>
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent={"center"}
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{xs:4, sm:8, sm:12}}
            >
                {renderProducts}
            </Grid>
        </Container>
    )
}

export default Products