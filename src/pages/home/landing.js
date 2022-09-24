import { Fade, styled, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";

const LandingTrece = (props) => {
  const str = props.data.txtT;

  const coloredStr = str.match("derrames");
  const [before, after] = str.split("derrames");

  return (
    <LayoutLanding {...props}>
      <TitleTextDiv>
        <Fade in={true} timeout={700}>
          <Typography variant="h1">
            {before}
            {coloredStr && coloredStr[0] && (
              <SpanColor>{coloredStr[0]}</SpanColor>
            )}
            {after}
          </Typography>
        </Fade>

        <Fade in={true} timeout={1800}>
          <Typography variant="h3">{props.data.txt1.toUpperCase()}</Typography>
        </Fade>
      </TitleTextDiv>
    </LayoutLanding>
  );
};

const LayoutLanding = styled("div")(({ theme, data }) => ({
  height: "100%",
  width: "100%",

  background: `url(${data.img}) no-repeat center`,
  backgroundSize: "cover",
}));

const TitleTextDiv = styled("div")(({ theme, data }) => ({
  height: "100%",
  width: isMobile ? "90%" : "35%",
  paddingLeft: isMobile ? "8%" : "5%",
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
    txtT: "No mas derrames o bolsas rotas",

    txt1: "eleginos y logra el mejor resultado en las tareas de todos los dias",
    img: "",
  },
};

export default LandingTrece;
