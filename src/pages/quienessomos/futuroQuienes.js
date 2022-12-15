import { Grid, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";

import markF from "../../assets/Quienessomos/markFuturo.png";
import futuro from "../../assets/Quienessomos/Futuro.png";

const FuturoQuienes = () => {
  return (
    <div
      style={{
        backgroundColor: "#E7F7F4",
        // width: isMobile ? "98vw" : "99.8vw",
        minHeight: "60vh",
        //    marginLeft: !isMobile ? "-5%" : "-8%",

        padding: "30px 14%",
      }}
    >
      <Grid
        container
        spacing={4}
        // style={{ marginLeft: isMobile && "-24%", width: isMobile && "84vw" }}
      >
        <GridText />
        {!isMobile && <GridImg />}
      </Grid>
    </div>
  );
};

const GridImg = () => {
  return (
    <Grid item md={5} xs={12}>
      <img
        src={futuro}
        style={{ width: "85%", height: "auto", paddingLeft: 60 }}
        alt="futuro"
      />
    </Grid>
  );
};

const GridText = () => {
  return (
    <Grid
      item
      md={7}
      xs={12}
      style={{
        textAlign: "left",
      }}
    >
      <div
        style={{
          marginTop: -28,
          display: "flex",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <img src={markF} alt="dgfdsg" style={{ width: "18%" }} />
        <div style={{ marginLeft: isMobile ? 20 : 30 }}>
          <Typography variant="h2">El futuro sí</Typography>

          <Typography variant="h2" style={{ color: "#00C5B1" }}>
            nos importa
          </Typography>
        </div>
      </div>
      <div
        style={{
          width: 36,
          borderBottom: "4px solid #00C5B1",
          borderRadius: 5,
          marginBottom: 40,
          marginTop: 10,
        }}
      ></div>
      {isMobile && (
        <img
          src={futuro}
          style={{
            width: isMobile ? "74%" : "84%",
            height: "auto",
            marginBottom: 30,
          }}
          alt="futuro"
        />
      )}
      <Typography variant="h4">{data.txt1}</Typography>
      <br />
      <Typography variant="h4">{data.txt2}</Typography> <br />
      <Typography variant="h4" style={{ marginBottom: !isMobile && 64 }}>
        {data.txt3}
      </Typography>
    </Grid>
  );
};

const data = {
  txt1: `Sabemos el impacto que tienen nuestras acciones en el futuro del planeta. 
  Es por eso que nuestra firma tiene una fuerte política de compromiso ambiental.`,
  txt2: `Nuestros productos se realizan a partir de Polietileno de Baja Densidad 
  (PEBD) reciclado. Su origen proviene de los restos de silo bolsas, film stretch, 
  film termocontraible y scrap de origen industrial.`,
  txt3: ``,
};

/* 
Cada una de las líneas de producción son optimizadas de manera
    permanente para reducir el consumo de energía, agua y la generación
    de residuos industriales. */

export default FuturoQuienes;
