import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import TitleTrece from "../../shared/title";
import BtnRounded from "../../shared/btnRounded";
import { useNavigate } from "react-router-dom";

import industriales from "../../assets/home/Bolsasescombros.png";
import institucionales from "../../assets/home/Bolsaspatologicas.png";
import domiciliarias from "../../assets/home/Bolsasverdes.png";

const DivProductos = () => {
  let navigate = useNavigate();
  return (
    <ContainerDiv>
      <TitleTrece>{productosData.title}</TitleTrece>
      <Typography variant="h4">
        Contamos con más de S0 productos realizados en PEBD reciclado.
        Cumpliendo con estrictas normas de calidad, ofrecen soluciones a la
        medida de tus necesidades
      </Typography>
      <Products>
        {productosData.productos.map((producto) => (
          <Grid item xs={4} md={4} key={producto.name}>
            <StyledImg src={producto.img} />
            <Typography
              variant="h3"
              style={{
                color: "#808080",
                fontFamily: "museoSansRoundedBold",
                fontSize: isMobile && "1rem",
              }}
            >
              {producto.name}
            </Typography>
          </Grid>
        ))}
      </Products>

      <BtnRounded onClick={() => navigate("productos")}>
        {productosData.btnText}
      </BtnRounded>
    </ContainerDiv>
  );
};

const StyledImg = styled("img")(() => ({
  width: isMobile ? "26vw" : "16vw",
  height: "auto",
  //borderRadius: "50%",
  margin: !isMobile ? 40 : 12,
  marginBottom: 10,
}));

const ContainerDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",

  backgroundColor: "#f2f2f2",
  padding: isMobile ? "40px 6%" : "60px 16%",
}));

const Products = styled(Grid)(() => ({
  display: "flex",
  flexDirection: isMobile ? "row" : "row",
  justifyContent: "center",
  marginBottom: 60,
}));

const productosData = {
  title: "Productos",
  subtitle: `Contamos con más de 50 productos realizados en PEBD reciclado.
  Cumpliendo con estrictas normas de calidad, ofrecen soluciones a la
  medida de tus necesidades.`,
  btnText: "Ver Mas",
  func: () => {},
  productos: [
    {
      img: industriales,
      name: "Industriales",
      descripcion:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab.",
    },
    {
      img: institucionales,
      name: "Institucionales",
      descripcion:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab.",
    },
    {
      img: domiciliarias,
      name: "Domiciliarias",
      descripcion:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab.",
    },
  ],
};

export default DivProductos;
