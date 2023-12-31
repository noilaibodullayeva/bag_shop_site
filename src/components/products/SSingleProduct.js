import { Checkbox, IconButton, Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import PProductMeta from "./PProductMeta";
import FavouriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDeteil";

const SSingleProduct = ({ product, matches }) => {

    const [ProductDetailDialog,
        showProductDetailDialog,
        closeProductDetailDialog] = useDialogModal(ProductDetail)

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <PProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0} top={0} right={0}>
                            <IconButton aria-label="Add to favorites">
                                <Checkbox icon={<FavouriteIcon />} checkedIcon={<FavouriteIcon sx={{ color: "red" }} />} />
                            </IconButton>
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
                <ProductAddToCart variant="contained">
                    Add to card
                </ProductAddToCart>
            </Product>
            <ProductDetailDialog product={product} />
        </>

    )
}

export default SSingleProduct;