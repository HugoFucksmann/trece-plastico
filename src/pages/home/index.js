import { useEffect } from "react";
import DivProductos from "./divProductos";
import DivQuienes from "./divquienes";
import { goToTop } from "../../helpers/goToTop";
import CarouselFullScreen from "./carouselFullScreen";
import DivIg from "./divIg";
import TitleTrece from "../../shared/title";
import newImg from "../../assets/home/Home_Sumate.png";
import { Button, Typography } from "@mui/material";
import BtnRounded from "../../shared/btnRounded";
import { isMobile } from "../../helpers/isMobile";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
      <CarouselFullScreen />
      <DivQuienes />
      <DivProductos />
      <NewModule />
    </>
  );
};

const NewModule = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        marginTop: 90,
        marginBottom: 80,
      }}
    >
      <TitleTrece style={{ textAlign: "center" }}>
        ¡Podés ser distribuidor!
      </TitleTrece>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile && "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <img
          src={newImg}
          style={{
            width: isMobile ? "60%" : "40%",
            marginRight: !isMobile && 40,
            marginBottom: isMobile && 30,
          }}
        />
        <div>
          <div>
            <Typography variant="h4" style={{ marginBottom: 12 }}>
              {newText}
            </Typography>
            <Typography
              variant="h4   "
              style={{ fontWeight: "bold", color: "#5E7588" }}
            >
              ¡Ahora te toca a vos!
            </Typography>
          </div>

          <BtnRounded
            onClick={() => navigate("/sumate")}
            style={{ marginTop: 40 }}
          >
            SUMATE
          </BtnRounded>
        </div>
      </div>
    </div>
  );
};

const newText = `Más de 50 firmas de todo el país eligen nuestros productos,
para brindar propuestas confiables a sus clientes.
`;

export default Home;
