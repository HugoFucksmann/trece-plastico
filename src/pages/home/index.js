import { useEffect } from "react";
import DivProductos from "./divProductos";
import DivQuienes from "./divquienes";
import { goToTop } from "../../helpers/goToTop";
import CarouselFullScreen from "./carouselFullScreen";
import DivIg from "./divIg";

const Home = () => {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
      <CarouselFullScreen />
      <DivQuienes />
      <DivProductos />
      {/* <DivIg /> */}
    </>
  );
};

export default Home;
