import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { Colors } from "../../styles/themes";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Facebook, Instagram, Send, Telegram, Twitter } from "@mui/icons-material";


export default function Footer() {
    return (
        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' }
            }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    <Typography variant="caption2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci temporibus id voluptates et facilis cum aliquam
                        voluptatem consectetur veritatis, unde, cumque perferendis
                        nemo? Excepturi, officiis enim.
                    </Typography>
                    <Box sx={{
                        mt: 4,
                        color: Colors.dove_gray
                    }}
                    >
                        <Facebook sx={{ mr: 1 }} />
                        <Twitter sx={{ mr: 1 }} />
                        <Instagram sx={{ mr: 1 }} />
                        <Telegram sx={{ mr: 1 }} />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Card
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1" >
                        newsletter
                    </FooterTitle>
                    <Stack>
                        <SubscribeTf
                            color="primary"
                            label="Email adress"
                            variant="standard"
                        />
                        <Button startIcon={<Send sx={{ color: Colors.white }} />}
                            sx={{ mt: 4, mb: 4 }}
                            variant="contained">
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
                <Typography
                sx={{
                    color: Colors.white,
                    pt:10,
                    pb:3,
                    fontFamily: "cursive",
                    fontSize: "1em",
                }}
                >
                    Created by noila🙌
                </Typography>
            </Grid>
        </Box>
    )
}