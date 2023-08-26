import { IconButton } from "@mui/material"
import { AppBarContainer, AppBarHeader } from "../../styles/AppBar"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions"

const BarMobile = ({matches}) => {
    return (
        <div>
            <AppBarContainer>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <AppBarHeader textAlign={"center"} variant="h4">
                    My Bags
                </AppBarHeader>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Actions matches={matches}/>
            </AppBarContainer>
        </div>
    )
}

export default BarMobile