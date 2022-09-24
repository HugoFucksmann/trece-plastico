import { useContext, useEffect } from "react";
import BannerSubPage from "../../shared/bannerSubPage";
import DescriptionDiv from "./descriptionDiv";
import ItemsDiv from "./itemsDiv";

import social from "../../assets/Quienessomos/Social.png";

import ambiental from "../../assets/Quienessomos/Ambiental.png";

import { TreceContext } from "../../context/treceContext";
import ContainerSubPage from "../../shared/containerSubPage";
import { Fade } from "@mui/material";
import { goToTop } from "../../helpers/goToTop";
import { isMobile } from "../../helpers/isMobile";
import FuturoQuienes from "./futuroQuienes";

const QuienesSomos = () => {
  const { BannerSubPageData } = useContext(TreceContext);

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <Fade in={true}>
      <div>
        <BannerSubPage page={BannerSubPageData.quienes} />
        <div style={{ marginBottom: isMobile ? 60 : 120 }} />
        <ContainerSubPage>
          <DescriptionDiv orden={0} data={itemsData[0]} />
        </ContainerSubPage>
        <FuturoQuienes />

        <ContainerSubPage>
          <DescriptionDiv orden={isMobile ? 0 : 1} data={itemsData[1]} />
        </ContainerSubPage>
      </div>
    </Fade>
  );
};

const itemsData = [
  {
    imagen: ambiental,
    text: {
      title1: "Un poco de",
      title2: "nuestra historia",
      txt: ` Somos una empresa fundada en 2015 dedicada a la confección de bolsas de
    polietileno, especializada en bolsas de residuo y consorcio, tanto
    domiciliarias como patológicas, así como también en bolsas de
    polietileno destinadas a aplicaciones industriales especiales Contamos
    con personal especializado en cada paso del proceso de fabricación, así
    como maquinarias automáticas y semiautomáticas, lo que garantizan una
    excelente calidad del producto terminado.`,
    },
  },
  {
    imagen: social,
    text: {
      title1: "Un poco de",
      title2: "nuestra historia",
      txt: ` Somos una empresa fundada en 2015 dedicada a la confección de bolsas de
    polietileno, especializada en bolsas de residuo y consorcio, tanto
    domiciliarias como patológicas, así como también en bolsas de
    polietileno destinadas a aplicaciones industriales especiales Contamos
    con personal especializado en cada paso del proceso de fabricación, así
    como maquinarias automáticas y semiautomáticas, lo que garantizan una
    excelente calidad del producto terminado.`,
    },
  },
  {
    imagen: social,
    text: {
      title1: "Un poco de",
      title2: "nuestra historia",
      txt: ` Somos una empresa fundada en 2015 dedicada a la confección de bolsas de
    polietileno, especializada en bolsas de residuo y consorcio, tanto
    domiciliarias como patológicas, así como también en bolsas de
    polietileno destinadas a aplicaciones industriales especiales Contamos
    con personal especializado en cada paso del proceso de fabricación, así
    como maquinarias automáticas y semiautomáticas, lo que garantizan una
    excelente calidad del producto terminado.`,
    },
  },
];

export default QuienesSomos;
