import styled from "@emotion/styled";
import { Button } from "@mui/material";

const BtnRounded = (props) => {
  return (
    <BtnStyle
      size="large"
      style={{ fontFamily: "museoSansRoundedBold" }}
      {...props}
    >
      {props.children}
    </BtnStyle>
  );
};

const BtnStyle = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  width: 180,
  borderRadius: 25,
  background: "linear-gradient(to right bottom, #244c83, #6ec4b0)",
  transition: "all 0.3s",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export default BtnRounded;
