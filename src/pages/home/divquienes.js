import { Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import { useNavigate } from "react-router-dom";
import BtnRounded from "../../shared/btnRounded";
import TitleTrece from "../../shared/title";

const DivQuienes = (props) => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        margin: isMobile ? "80px 4%" : "16vh 0px",
      }}
    >
      <TitleTrece>{gggg.title}</TitleTrece>
      <Typography variant="h4">{gggg.subtitle}</Typography>

      <BtnRounded
        onClick={() => navigate("/quienessomos")}
        style={{ marginTop: 50 }}
      >
        {gggg.btnText}
      </BtnRounded>
    </div>
  );
};

const gggg = {
  title: "quiens somos",
  btnText: "CONOCENOS",
  subtitle: `Creamos bolsas de polietileno para diferentes aplicaciones en el mercado. Diseñamos
  propuestas para empresas, instituciones y distribuidores de todo el país.
  Somos una empresa que une compromiso ambiental y calidad para brindarte
  productos confiables.`,
};

export default DivQuienes;
