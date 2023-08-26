import { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import theme from "./styles/themes"
import { ThemeProvider } from "@mui/system"
import Bar from "./components/bar"
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
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
        <Bar/>
        <Banner/>
      </Container>
      <Promotions/>
      <Box display="flex" justifyContent={"center"} sx={{p: 4}}>
        <Typography variant="h4" fontFamily={"cursive"}>Our Products</Typography>
      </Box>
      <Products/>
    </ThemeProvider>

  );
}

export default App;
