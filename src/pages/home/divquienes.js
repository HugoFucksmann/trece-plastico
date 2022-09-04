import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Title from "./baseComp/title";
import { isMobile } from "../../helpers/isMobile";
import BtnRounded from "./baseComp/btnRounded";

//gradiant azul
// background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",

const DivQuienes = (props) => {
  return (
    <ContainerDiv>
      <Title>{props.title}</Title>
      <Typography variant="h4">{props.subtitle}</Typography>
      <br />

      <BtnRounded click={props.func}>{props.btnText}</BtnRounded>
    </ContainerDiv>
  );
};

const ContainerDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  margin: 100,
  marginRight: !isMobile ? "16%" : "4%",
  marginLeft: !isMobile ? "16%" : "4%",
}));

DivQuienes.defaultProps = {
  title: "quiens somos",
  btnText: "CONOCENOS",
  subtitle: `Somos una empresa dedicada a la confección de bolsas de polietileno
  especializada en bolsas de residuo y consorcio, tanto domiciliarias como
  patológicas, así como también en bolsas de polietileno destinadas a
  aplicaciones industriales especiales.`,
};

export default DivQuienes;
