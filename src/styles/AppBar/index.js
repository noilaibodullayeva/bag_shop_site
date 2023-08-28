import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../themes";
import "@fontsource/montez"

//container
export const AppBarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: "4",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px",
}));


//header
export const AppBarHeader = styled(Typography)(() => ({
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: ` "Montez", "cursive`,
    color: Colors.secondary,
    padding: "4px",
}));

//list

export const MyList = styled(List)(({ type }) => ({
    display: type === `row` ? 'flex' : `block`,
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center"
}))

//actionicons

export const ActionIconContainerMobile = styled(Box)(() => ({
    display: `flex`,
    alignItems: "center",
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 99,
    borderTop: "1px solid ${Colors.border}"
}));

export const ActionIconContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: '250px',
    zIndex: 1999
}))
