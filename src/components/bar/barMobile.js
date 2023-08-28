import { IconButton } from "@mui/material"
import { AppBarContainer, AppBarHeader } from "../../styles/AppBar"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions"
import { useUIContext } from "../../context/ui"

const BarMobile = ({matches}) => {
    const {setDrawerOpen, setShowSearchBox} = useUIContext()

    return (
        <div>
            <AppBarContainer>
                <IconButton onClick={()=> setDrawerOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <AppBarHeader textAlign={"center"} variant="h4">
                    My Bags
                </AppBarHeader>
                <IconButton
                onClick={()=>setShowSearchBox(true)}
                >
                    <SearchIcon />
                </IconButton>
                <Actions matches={matches}/>
            </AppBarContainer>
        </div>
    )
}

export default BarMobile