import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material"
import {AppBarContainer, AppBarHeader, MyList } from "../../styles/AppBar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions"

const BarDesktop = ({ matches }) => {

  
    return (
            <AppBarContainer>
                <AppBarHeader>
                    My Bags
                </AppBarHeader>
                <MyList type="row">
                    <ListItemText primary="Home" />
                    <ListItemText primary="Categories" />
                    <ListItemText primary="Products" />
                    <ListItemText primary="Contact us" />
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                    </ListItemButton>
                    <Actions matches={matches} />
                </MyList>
            </AppBarContainer>
    )
}

export default BarDesktop