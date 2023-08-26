import { useTheme } from "@mui/material/styles"
import {useMediaQuery} from "@mui/material"
import BarMobile from "./barMobile"
import BarDesktop from "./bardeskop"
const Bar = () => {
    const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down(`md`))
    return (
        <>
        {matches ? <BarMobile matches={matches} /> : <BarDesktop matches={matches} />}
        </>
    );
}

export default Bar;