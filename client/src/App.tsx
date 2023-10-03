import React from "react";
import { ProductListingPage } from "./pages/productsListing";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <div className="App">
          Hi there
          <ProductListingPage />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
