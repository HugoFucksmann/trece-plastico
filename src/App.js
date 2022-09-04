import appTheme from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TreceProvider from "./context/treceContext";
import { CssBaseline } from "@mui/material";

import Productos from "./pages/productos";
import Contacto from "./pages/contacto";
import DondeComprar from "./pages/dondecomprar";
import QuienesSomos from "./pages/quienessomos";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <TreceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/quienessomos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/dondecomprar" element={<DondeComprar />} />
          </Routes>
        </BrowserRouter>
      </TreceProvider>
    </ThemeProvider>
  );
}

export default App;
