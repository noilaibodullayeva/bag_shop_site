import { Checkbox, IconButton, Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import PProductMeta from "./PProductMeta";
import FavouriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDeteil";

const SSingleProductDesktop = ({ product, matches }) => {

    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true)
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }

    const [ProductDetailDialog,
        showProductDetailDialog,
        closeProductDetailDialog] = useDialogModal(ProductDetail)

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton >
                        <Checkbox icon={<FavouriteIcon />} checkedIcon={<FavouriteIcon sx={{ color: "red" }} />} />
                </ProductFavButton>

                {
                    showOptions && <ProductAddToCart show={showOptions} variant="contained">
                        Add to card
                    </ProductAddToCart>
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column" sx={{ pt: "15px" }}>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
                <PProductMeta product={product} matches={matches} />
            </Product>
            <ProductDetailDialog product={product} />
        </>

    )
}

export default SSingleProductDesktop;