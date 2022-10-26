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

      <Products>
        {productosData.productos.map((producto) => (
          <Grid item xs={12} md={4} key={producto.name}>
            <StyledImg src={producto.img} />
            <Typography variant="h3">{producto.name}</Typography>
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
  width: isMobile ? "34vw" : "16vw",
  height: "auto",
  borderRadius: "50%",

  margin: 40,
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
  flexDirection: isMobile ? "column" : "row",
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
