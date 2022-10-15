import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CircularImg from "./baseComp/imgCircular";
import { Grid } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import TitleTrece from "../../shared/title";
import BtnRounded from "../../shared/btnRounded";
import { useNavigate } from "react-router-dom";

const DivProductos = ({ productosData }) => {
  let navigate = useNavigate();
  return (
    <ContainerDiv>
      <TitleTrece>{productosData.title}</TitleTrece>

      <Typography variant="h4" style={{ marginRight: "6%", marginLeft: "6%" }}>
        Contamos con más de 50 productos realizados en PEBD reciclado.
        Cumpliendo con estrictas normas de calidad, ofrecen soluciones a la
        medida de tus necesidades.
      </Typography>

      <Products contained>
        {productosData.productos.map((producto) => (
          <Grid item xs={12} md={4} key={producto.name}>
            <CircularImg src={producto.img} />
            <Typography variant="h3">{producto.name}</Typography>
            {/*  <Typography variant="h6" style={{ margin: "2px 4%" }}>
              {producto.descripcion}
            </Typography> */}
          </Grid>
        ))}
      </Products>

      <BtnRounded
        onClick={() => navigate("productos")}
        style={{ marginTop: 60 }}
      >
        {productosData.btnText}
      </BtnRounded>
    </ContainerDiv>
  );
};

const ContainerDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",

  backgroundColor: "#f2f2f2",
  padding: isMobile ? "40px 6%" : "60px 16%",
}));

const Products = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  justifyContent: "center",
}));

DivProductos.defaultProps = {
  productosData: {
    title: "quiens somos",
    subtitle: `Somos una empresa dedicada a la confección de bolsas de polietileno
  especializada en bolsas de residuo y consorcio, tanto domiciliarias como
  patológicas, así como también en bolsas de polietileno destinadas a
  aplicaciones industriales especiales.`,
    btnText: "Ver",
    func: () => {},
    productos: [
      {
        img: "",
        name: "",
        descripcion: "",
      },
    ],
  },
};

export default DivProductos;
