import { useEffect } from 'react';
import {
  Box,
  Container,
  Drawer,
  Typography
} from '@mui/material';
import theme from "./styles/themes"
import { ThemeProvider } from "@mui/system"
import Bar from "./components/bar"
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';


function App() {


  useEffect(() => {
    document.title = "personal project";
  }, [])

  return (

    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}
      >
        <UIProvider>
          <Bar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4" fontFamily={"cursive"}>Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>

  );
}

export default App;
