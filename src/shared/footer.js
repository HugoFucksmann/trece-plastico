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
          <DivGrid>
            <StyledLogo src={logo} alt="logoGaetani" />
            <TextLogo variant="h5">Especialista en Bolasas</TextLogo>
            <div>
              {socialMediaData.map(({ ico, alt, link }) => (
                <MediaIcon
                  key={alt}
                  src={ico}
                  atl={alt}
                  onClick={() => window.open(link, "_blank")}
                />
              ))}
            </div>
          </DivGrid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ marginBottom: isMobile && 12, display: "flex" }}
        >
          <InfoIcon src={marker} atl="marker1" />
          <div>
            <Typography variant="h5" style={{ color: "#fff" }}>
              Cuyo 211, La Reja
            </Typography>
            <TextInfo variant="h5" a que>
              Moreno, Buenos Aires
            </TextInfo>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            style={{ display: "flex", marginBottom: 24, cursor: "pointer" }}
            onClick={() =>
              window.open("https://wa.me/54911276404031", "_blank")
            }
          >
            <InfoIcon src={tel} atl="tel" />
            <TextInfo variant="h5">+54 9 11 27640403</TextInfo>
          </div>

          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() =>
              window.open("https://wa.me/54911276404031", "_blank")
            }
          >
            <InfoIcon src={correo} atl="correo" />
            <TextInfo variant="h5">ventas@plasticosgaetani.com.ar</TextInfo>
          </div>
        </Grid>
      </Grid>
      <Divider variant="middle" color="#007DCA" style={{ margin: 30 }} />
      <StyledText>
        Desarrollado por{" "}
        <span style={{ fontWeight: "bold" }}>TRECE Comunicación </span>
      </StyledText>
    </ContentFooter>
  );
};

const ContentFooter = styled("div")(({ theme }) => ({
  padding: "60px 16%",
  paddingBottom: 20,
  backgroundColor: theme.palette.primary.main,
}));

const DivGrid = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  marginRight: !isMobile && 40,
}));

const StyledLogo = styled("img")(() => ({
  width: isMobile ? "60%" : "70%",
  margin: "auto",
  marginBottom: 16,
}));

const MediaIcon = styled("img")(() => ({
  marginRight: 16,
  cursor: "pointer",
  width: 30,
}));

const InfoIcon = styled("img")(() => ({
  width: 32,
  height: 32,
  marginRight: 20,
}));

const StyledText = styled(Typography)(() => ({
  textAlign: "center",
  color: "#007DCA",
}));

const TextLogo = styled(Typography)(() => ({
  color: " #fff",
  marginBottom: 16,
}));

const TextInfo = styled(Typography)(() => ({
  color: " #fff",
  fontWeight: "inherit",
}));

const socialMediaData = [
  {
    ico: insta,
    alt: "instagram",
    link: "https://instagram.com/plasticosgaetani/",
  },
  { ico: fb, alt: "facebook", link: "https://facebook.com/plasticosgaetani/" },
  {
    ico: insta,
    alt: "linkedin",
    link: "https://linkedin.com/company/plasticos-gaetani/",
  },
];

export default FooterTrece;
