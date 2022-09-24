import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import TitleTrece from "../../shared/title";

import valores from "../../assets/Quienessomos/Valores.png";
import vision from "../../assets/Quienessomos/Vision.png";
import mision from "../../assets/Quienessomos/Mision.png";
import { isMobile } from "../../helpers/isMobile";

const ItemsDiv = () => {
  return (
    <ContainerDiv>
      <Grid container spacing={2}>
        {data.map((obj, i, arr) => (
          <Grid
            item
            xs={12}
            md={4}
            style={{
              borderRight:
                !isMobile && i + 1 !== arr.length && "4px solid #D4E4E6",
              borderBottom:
                isMobile && i + 1 !== arr.length && "4px solid #D4E4E6",
              paddingBottom: isMobile && i + 1 !== arr.length && 40,
              marginBottom: isMobile && 30,
            }}
          >
            <img src={obj.img} style={{ width: isMobile ? "50%" : "60%" }} />
            <TitleTrece> {obj.title} </TitleTrece>
            {i === 0 ? (
              obj.text.map((txt) => (
                <TextStyle variant="h4" style={{ lineHeight: "42px" }}>
                  {txt}
                </TextStyle>
              ))
            ) : (
              <TextStyle variant="h4">{obj.text}</TextStyle>
            )}
          </Grid>
        ))}
      </Grid>
    </ContainerDiv>
  );
};

const TextStyle = styled(Typography)(({ theme }) => ({
  margin: "0px 4%",
}));

const ContainerDiv = styled("div")(({ theme }) => ({
  backgroundColor: "#EBF0F1",
  borderRadius: 10,
  padding: 40,
  marginBottom: 120,
}));

const data = [
  {
    title: "Nuestros valores",
    text: [
      "Honestidad",
      "Excelencia",
      "Adaptabilidad",
      "Diligencia",
      "Libertad de expresión",
      "Constancta",
    ],
    img: valores,
  },
  {
    title: "Nuestra visión",
    text: `Ser lideres en la fabricación de
  productos plásticos, manteniendo
  nuestro compromiso con la calidad, el
  medio ambiente y el desarrollo de
  nuestros colaboradores y clientes.`,
    img: vision,
  },
  {
    title: "Nuestra misión",
    text: `Satisfacer a nuestros clientes con un
  equipo comprometido con la calidad y
  excelencia en la fabricación de
  productos plásticos.
  Desarrollar nuestras actividades en un
  marco de Responsabilidad Social y
  Respeto por el Medioambiental.`,
    img: mision,
  },
];

export default ItemsDiv;
