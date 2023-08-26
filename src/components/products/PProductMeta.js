import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";
export default function PProductMeta({ product, matches }) {
    return (
      <ProductMetaWrapper>
        <Typography fontFamily={"cursive"} variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography fontFamily={"cursive"} variant={matches ? "caption" : "body1"}>
          ${product.price}
        </Typography>
      </ProductMetaWrapper>
    );
}