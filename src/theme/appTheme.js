import { createTheme } from "@mui/material/styles";
import museoSansRounded900 from "../fonts/MuseoSansRounded-900.otf";
import museoSansRounded300 from "../fonts/MuseoSansRounded-300.otf";
import museoSlab500i from "../fonts/Museo_Slab_500.otf";
import { isMobile } from "../helpers/isMobile";

//*-------- FONTS -------------------

const museoSlab = {
  "@font-face": {
    fontFamily: "museoSlab",
    src: `url(${museoSlab500i}) format('woff')`,
  },
};

const museoRoundedBold900 = {
  "@font-face": {
    fontFamily: "museoSansRoundedBold",
    src: `url(${museoSansRounded900}) format('woff')`,
  },
};

const museoRoundedBold300 = {
  "@font-face": {
    fontFamily: "museoSansRounded300",
    src: `url(${museoSansRounded300}) format('woff')`,
  },
};
//*-------------------------------------------

const appTheme = createTheme({
  /*  typography: {
    fontFamily: ["museoSlab"].join(),
  }, */
  components: {
    MuiCssBaseline: {
      styleOverrides: [museoSlab, museoRoundedBold900, museoRoundedBold300],
    },
  },
  palette: {
    primary: {
      main: "rgb(36, 76, 131)",
      second: "rgb(110, 196, 176)",
      soft: "rgb(95, 111, 129)",
      dark: "rgb(33, 33, 33)",
      light: "rgb(235, 235, 235)",
    },
    secondary: {
      main: "#000",
      gradiantOne: "linear-gradient(to right bottom, #0100ec, #fb8364)",
      gradiantTwo: "linear-gradient(to right bottom, #00ffed, #9d00c6)",
      gradiantThree: "linear-gradient(to right bottom, #f237ef, #fc5252)",
      gradiantFour: "linear-gradient(to right bottom, #1eadf0, #0afb60)",
      mainTr: "rgb(36, 76, 131,.7)",
      secondTr: "rgb(110, 196, 176,.7)",
      softTr: "rgb(95, 111, 129,.7)",
      darkTr: "rgb(33, 33, 33,.7)",
      lightTr: "rgb(235, 235, 235,.7)",
    },
  },
});

//*-------- typography-------------------

appTheme.typography.h1 = {
  fontSize: isMobile ? "2.5rem" : "3.8rem",
  lineHeight: isMobile ? "56px" : "66px",
  fontFamily: "museoSansRoundedBold",
  fontStyle: "inherit",
  color: appTheme.palette.primary.main,
};

appTheme.typography.h2 = {
  fontSize: isMobile ? "1.7rem" : "2rem",
  lineHeight: !isMobile && "40px",
  fontFamily: "museoSansRoundedBold",
  color: "#5f6f81",
  fontStyle: "inherit",
};
appTheme.typography.h3 = {
  fontSize: isMobile ? "1.3rem" : "1.6em",
  lineHeight: isMobile && "36px",
  fontFamily: "museoSlab",
  color: "#000",
  fontStyle: "inherit",
};
appTheme.typography.h4 = {
  fontSize: isMobile ? "1.1em" : "1.4em",
  fontFamily: "museoSlab",
  color: "#000",
  fontWeight: "normal",
  fontStyle: "normal",
  fontStyle: "inherit",
};
appTheme.typography.h5 = {
  fontSize: isMobile ? "0.8em" : "1em",
  fontFamily: "museoSlab",
  color: appTheme.palette.primary.soft,
  fontStyle: "inherit",
};
appTheme.typography.h6 = {
  fontSize: isMobile ? "0.6em" : "0.9rem",
  fontFamily: "museoSlab",
  color: "#5f6f81",
  fontStyle: "inherit",
};
//*-------------------------------------------

export default appTheme;
