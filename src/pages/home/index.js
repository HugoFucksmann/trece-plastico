import { useContext } from "react";
import FooterTrece from "../../shared/footer";
import HeaderTrece from "../../shared/header";
import DivProductos from "./divProductos";
import DivQuienes from "./divquienes";
import LayoutWebUno from "./layoutWebUno";
import BtnScroll from "../../shared/btnScrollToTop";
import { TreceContext } from "../../context/treceContext";
import CarouselFullScreen from "./carouselFullScreen";
const Home = () => {
  const { productosData } = useContext(TreceContext);
  return (
    <>
      <LayoutWebUno
        header={<HeaderTrece />}
        landing={<CarouselFullScreen />}
        footer={<FooterTrece />}
      >
        <DivQuienes />
        <br />
        <br />
        <DivProductos productosData={productosData} />
        <br />

        <br />
      </LayoutWebUno>
      <BtnScroll />
    </>
  );
};

export default Home;
