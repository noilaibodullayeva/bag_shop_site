import {
  Button,
  // Box,
  // Button,
  Divider,
  Drawer,
  // IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/AppBar";
import { Close } from "@mui/icons-material";
import { lighten } from "polished";
import { Colors } from "../../styles/themes";


const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {

  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <>
      {
        drawerOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <Close
          className="testing"
            sx={{
              fontSize: '2.5 em',
              color: lighten(0.09, Colors.secondary)

            }}
          />
        </DrawerCloseButton>
      }
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>

    </>
  )
}