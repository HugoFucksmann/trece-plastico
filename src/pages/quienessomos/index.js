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
          <DescriptionDiv data={itemsData[0]} istitle={false} />
        </ContainerSubPage>
        <FuturoQuienes />

        <ContainerSubPage>
          <DescriptionDiv data={itemsData[1]} />
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
      txt1: `Somos una empresa argentina que dio sus primeros pasos en el año
      2015. Desde ese momento, nos especializamos en la fabricación de
      bolsas de polietileno para diferentes aplicaciones: domiciliarias,
      industriales y gestión de residuos especiales.`,
      txt2: `Contamos con un equipo de colaboradores especializado en el
      tratamiento de la materia prima, lo que nos asegura resultados de
      máxima calidad en cada uno de nuestros productos.`,
      txt3: `Desde Plásticos Gaetani tenemos una misión: acompañar a cada uno
      de nuestros clientes con soluciones eficientes y a la medida de sus
      necesidades.`,
    },
  },
  {
    imagen: social,
    text: {
      title1: "El compromiso",
      title2: "es con todos",
      txt1: `Las empresas argentinas tenemos un fuerte desafío en el actual
      contexto de la región. Desde nuestro espacio buscamos generar
      alianzas que potencien el crecimiento de la industria y las compañías
      emergentes del país.`,
      txt2: `Actuamos de forma activa en áreas de desarrollo y formación de
      lideres con el objetivo de impulsar el sector y mejorar las condiciones
      laborales de cada colaborador.`,
      txt3: `En el marco de nuestras politicas de responsabilidad social, nos
      comprometemos con las causas que atraviesan a nuestra comunidad
      y brindamos nuestro aporte cotidiano al fortalecimiento de los valores
      de nuestra nación.`,
    },
  },
];

export default QuienesSomos;
