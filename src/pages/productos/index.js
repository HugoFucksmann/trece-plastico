import { useContext, useEffect } from "react";
import { Fade } from "@mui/material";
import { TreceContext } from "../../context/treceContext";
import BannerSubPage from "../../shared/bannerSubPage";
import ContainerSubPage from "../../shared/containerSubPage";
import DescriptionDiv from "../quienessomos/descriptionDiv";
import { dataProductos } from "./productosData";
import SliderProductos from "./sliderProductos";
import { goToTop } from "../../helpers/goToTop";
import ProductosFinal from "./productosFinal";

import principal from "../../assets/Productos/principal.png";

const Productos = () => {
  const { BannerSubPageData } = useContext(TreceContext);

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <Fade in={true}>
      <div>
        <BannerSubPage page={BannerSubPageData.productos} />

        <ContainerSubPage>
          <DescriptionDiv orden={0} data={dataFirstProduct} />
          <SliderProductos dataProductos={dataProductos} />
        </ContainerSubPage>
        <ProductosFinal />
      </div>
    </Fade>
  );
};

const dataFirstProduct = {
  imagen: principal,
  text: {
    title: "",
    txt1: `Contamos con más de 50 productos, los cuales responden a diferentes necesidades del mercado.`,
    txt2: `Cada uno es realizado bajo estrictas normas de calidad, lo cual nos asegura resultados de excelencia.`,
  },
};

export default Productos;
