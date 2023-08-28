import { IconButton, Slide } from "@mui/material"
import { useUIContext } from "../../context/ui"
import { SearchBoxContainer, SearchField } from "../../styles/search"
import { Close, Search } from "@mui/icons-material"


export default function SearchBox() {
    const { showSearchBox, setShowSearchBox } = useUIContext()

    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color="secondary"
                    variant="standard"
                    fullWidth
                    placeholder="Seach..."
                />
                <IconButton>
                    <Search sx={{
                        fontSize: { xs: '2rem', md: "3rem" }
                    }} color="secondary"
                    />
                </IconButton>
                <IconButton
                onClick={()=> setShowSearchBox(false)}
                 sx={{position: "absolute", top: 10, right:10}}>
                    <Close sx={{
                        fontSize: '4rem', 
                        color:"secondary"}}
                    />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}