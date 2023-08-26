import { Checkbox, IconButton, Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import PProductMeta from "./PProductMeta";
import FavouriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import { useState } from "react";

const SSingleProductDesktop = ({ product, matches }) => {

    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true)
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isFav={0}>
                    <IconButton aria-label="add to favorites" top={0} right={0}>
                        <Checkbox icon={<FavouriteIcon />} checkedIcon={<FavouriteIcon sx={{ color: "red" }} />} />
                    </IconButton>
                </ProductFavButton>

                {
                    showOptions && <ProductAddToCart show={showOptions} variant="outlined">
                        Add to card
                    </ProductAddToCart>
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column" sx={{ pt: "15px" }}>

                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
                <PProductMeta product={product} matches={matches} />
            </Product>

        </>

    )
}

export default SSingleProductDesktop;