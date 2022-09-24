import { styled } from "@mui/material";
import { isMobile } from "../../../helpers/isMobile";

const CircularImg = (props) => {
  return <StyledImg {...props} src={props.src} alt="producto" />;
};

const StyledImg = styled("img")(({ theme }) => ({
  width: isMobile ? "34vw" : "18vw",
  height: "auto",
  borderRadius: "50%",

  margin: 40,
  marginBottom: 10,
}));

export default CircularImg;
