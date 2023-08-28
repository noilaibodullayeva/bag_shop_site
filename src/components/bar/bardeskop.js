import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material"
import {AppBarContainer, AppBarHeader, MyList } from "../../styles/AppBar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions"
import { useUIContext } from "../../context/ui"

const BarDesktop = ({ matches }) => {
    const { setShowSearchBox} = useUIContext()
  
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
                            <SearchIcon  
                             onClick={()=>setShowSearchBox(true)}
                             />
                        </ListItemIcon>
                    </ListItemButton>
                    <Actions matches={matches} />
                </MyList>
            </AppBarContainer>
    )
}

export default BarDesktop