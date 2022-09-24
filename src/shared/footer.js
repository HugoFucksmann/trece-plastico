import styled from "@emotion/styled";
import { Divider, Grid, Typography } from "@mui/material";

import fb from "../assets/home/facebook.png";
import insta from "../assets/home/instagram.png";
import logo from "../assets/LogoBlanco.png";
import tel from "../assets/whatsapp.png";
import marker from "../assets/marker.png";
import correo from "../assets/gmail.png";
import { isMobile } from "../helpers/isMobile";

const FooterTrece = () => {
  return (
    <ContentFooter>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              marginRight: !isMobile && 40,
            }}
          >
            <img
              src={logo}
              alt="logggoo"
              style={{
                width: isMobile ? "60%" : "70%",
                margin: "auto",
                marginBottom: 16,
              }}
            />
            <Typography
              variant={isMobile ? "h5" : "h4"}
              style={{ color: " #fff", marginBottom: 16 }}
            >
              Especialista en Bolasas
            </Typography>
            <div>
              <img
                src={insta}
                atl="instas"
                width={30}
                style={{ marginRight: 16 }}
              />
              <img src={fb} atl="facebookf" width={30} />
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ marginBottom: isMobile && 12, display: "flex" }}
        >
          <img
            src={marker}
            atl="facebookf"
            style={{ width: 26, height: 32, marginRight: 20 }}
          />
          <div>
            <Typography variant="h5" style={{ color: "#fff" }}>
              Cuyo 211, La Reja
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "#fff", fontWeight: "inherit" }}
            >
              Moreno, Buenos Aires
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ display: "flex", marginBottom: 24 }}>
            <img
              src={tel}
              atl="facebookf"
              style={{ width: 30, marginRight: 20 }}
            />
            <Typography variant="h5" style={{ color: "#fff" }}>
              +54 9 11 27640403
            </Typography>
          </div>

          <div style={{ display: "flex" }}>
            <img
              src={correo}
              atl="facebookf"
              style={{ width: 30, marginRight: 20 }}
            />
            <Typography variant="h5" style={{ color: "#fff" }}>
              ventas@plasticosgaetani.com.ar
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Divider variant="middle" color="#007DCA" style={{ margin: 30 }} />
      <Typography style={{ textAlign: "center", color: "#007DCA" }}>
        Desarrollado por
        <span style={{ fontWeight: "bold" }}>TRECE Comunicación </span>
      </Typography>
    </ContentFooter>
  );
};

const ContentFooter = styled("div")(({ theme }) => ({
  padding: "40px 16%",
  paddingBottom: 20,
  backgroundColor: theme.palette.primary.main,
}));

const ContentInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const ColumnInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export default FooterTrece;
