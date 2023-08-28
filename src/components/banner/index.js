import { useTheme } from "@mui/material/styles"
import { Typography, useMediaQuery } from "@mui/material"
import { BannerContainer, BannerContent, BannerDecs, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

const Banner = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(`md`))

    return (


        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collections</Typography>
                <BannerTitle variant="h2">
                    Brand Bags
                </BannerTitle>
                <BannerDecs variant="subtitle">
                    Women all over the world love. You get the idea! It is more like a friend to them; to be with them all day and carry all the things that they need while making them look good. It has been found than on average, a woman has six handbags with her.
                </BannerDecs>
                <BannerShopButton color='primary'>Shop now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner