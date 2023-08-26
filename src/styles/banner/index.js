import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../themes";


export const BannerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
    },
}))

export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "500px",
    padding: "0 10px 0 10px ",
    borderRadius: "5%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
        width: "380px",
        height: " 290px",
        padding: "20px, 10px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "320px",
        height: "270px",
    },
}))

export const BannerContent = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: 420,
    height: "100%",
    padding: "30px"
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down(`sm`)]: {
        fontSize: "42px"
    }
}))

export const BannerDecs = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    }
}))