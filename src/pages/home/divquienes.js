import { Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import { useNavigate } from "react-router-dom";
import BtnRounded from "../../shared/btnRounded";
import TitleTrece from "../../shared/title";

const DivQuienes = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        margin: isMobile ? "80px 4%" : "16vh 18vw",
        textAlign: "center",
      }}
    >
      <TitleTrece>{data.title}</TitleTrece>
      <Typography variant="h4" style={{ color: "grey", marginBottom: 28 }}>
        {data.subtitle1}
      </Typography>
      <Typography variant="h4" style={{ color: "grey" }}>
        {data.subtitle2}
      </Typography>
      <BtnRounded
        onClick={() => navigate("/quienessomos")}
        style={{ marginTop: 50 }}
      >
        {data.btnText}
      </BtnRounded>
    </div>
  );
};

const data = {
  title: "Quienes somos",
  btnText: "CONOCENOS",
  subtitle1: `Creamos bolsas de polietileno para diferentes aplicaciones en el mercado. Diseñamos propuestas para empresas, instituciones y distribuidores de todo el país.`,
  subtitle2: `Somos una empresa que une compromiso ambiental y calidad para brindarte productos confiables.`,
};

export default DivQuienes;
