import appTheme from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TreceProvider from "./context/treceContext";
import { CssBaseline } from "@mui/material";

import Productos from "./pages/productos";
import Sumate from "./pages/sumate";
import DondeComprar from "./pages/dondecomprar";
import QuienesSomos from "./pages/quienessomos";
import HeaderTrece from "./shared/header2";
import FooterTrece from "./shared/footer";
import BtnScroll from "./shared/btnScrollToTop";
import { isMobile } from "./helpers/isMobile";
import HeaderTreceMobile from "./shared/header";
console.log(isMobile);
function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <TreceProvider>
        <BrowserRouter>
          {isMobile ? <HeaderTreceMobile /> : <HeaderTrece />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/quienessomos" element={<QuienesSomos />} />
            <Route path="/sumate" element={<Sumate />} />
            <Route path="/dondecomprar" element={<DondeComprar />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <FooterTrece />
          <BtnScroll />
        </BrowserRouter>
      </TreceProvider>
    </ThemeProvider>
  );
}

export default App;
