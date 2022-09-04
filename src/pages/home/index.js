import { useContext } from "react";
import InstagramEmbed from "react-instagram-embed";
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
        <InstagramEmbed
          url="https://instagr.am/p/Zw9o4/"
          clientAccessToken="123|456"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <br />
      </LayoutWebUno>
      <BtnScroll />
    </>
  );
};

export default Home;
