import { Divider, ListItemButton, ListItemIcon } from "@mui/material"
import { MyList, ActionIconContainerDesktop, ActionIconContainerMobile, } from "../../styles/AppBar"
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart"
import Person from "@mui/icons-material/Person"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Colors } from "../../styles/themes";

const Actions = ({matches}) => {

    const Component = matches
        ? ActionIconContainerMobile
        : ActionIconContainerDesktop

    return (
        <Component>
            <MyList type="row">
                <ListItemButton sx={{
                    justifyContent: "center",
                }}>
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary
                        }}
                    >
                        <ShoppingCardIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{
                    justifyContent: "center",
                }}>
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary
                        }}
                    >
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{
                    justifyContent: "center",
                }}>
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />

            </MyList>
        </Component>

    )
}

export default Actions