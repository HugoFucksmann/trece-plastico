import { Fade, styled, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";

const LandingTrece = (props) => {
  const str = props.data.txtT;

  const coloredStr = str.match("derrames");
  const [before, after] = ["Especialistas", "en Bolsas"];

  return (
    <LayoutLanding {...props}>
      <img
        src={!isMobile ? props.data.img : props.data.imgM}
        style={{ width: "100%" }}
      />
      {/*  <Fade in={true} timeout={700}>
          <Typography variant="h1" style={{ marginBottom: 22 }}>
            <SpanColor>Especialistas</SpanColor>
            <br /> en Bolsas
          </Typography>
        </Fade>

        <Fade in={true} timeout={1800}>
          <Typography variant="h4">{props.data.txt1}</Typography>
        </Fade> */}
    </LayoutLanding>
  );
};

const LayoutLanding = styled("div")(({ theme, data }) => ({
  height: "100%",
  width: "100%",
  // background: `url(${data.img}) no-repeat`,
  marginTop: isMobile && "8vh",
  // backgroundSize: "cover",
}));

const TitleTextDiv = styled("div")(({ theme, data }) => ({
  height: "100%",
  width: isMobile ? "90%" : "35%",
  paddingLeft: isMobile ? "8%" : "8%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
}));

const SpanColor = styled("span")(({ theme, data }) => ({
  color: theme.palette.primary.second,
}));

LandingTrece.defaultProps = {
  data: {
    txtT: "Especialistas en Bolsas",

    txt1: "Eleginos y lográ el mejor resultado en las tareas de todos los días",
    img: "",
  },
};

export default LandingTrece;
