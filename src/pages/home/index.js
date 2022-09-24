import { useContext, useEffect } from "react";

import DivProductos from "./divProductos";
import DivQuienes from "./divquienes";
import { goToTop } from "../../helpers/goToTop";
import BtnScroll from "../../shared/btnScrollToTop";
import { TreceContext } from "../../context/treceContext";
import CarouselFullScreen from "./carouselFullScreen";
import ContainerSubPage from "../../shared/containerSubPage";
import { Fade } from "@mui/material";
import DivIg from "./divIg";
const Home = () => {
  const { productosData } = useContext(TreceContext);

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <Fade in={true}>
      <div>
        <CarouselFullScreen />
        <ContainerSubPage>
          <DivQuienes />
        </ContainerSubPage>
        <DivProductos productosData={productosData} />
        <DivIg />
      </div>
    </Fade>
  );
};

export default Home;
