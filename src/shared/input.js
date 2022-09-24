import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const InputC = (props) => {
  return (
    <div style={{ marginBottom: 18 }} {...props}>
      <Typography variant="h5" style={{ marginBottom: 12, textAlign: "left" }}>
        {props.label}
      </Typography>
      <InputStyled {...props} />
    </div>
  );
};

const InputStyled = styled("input")(({ theme }) => ({
  width: "100%",
  height: 36,

  border: "1px solid #fff",
  outline: "none",
  borderRadius: 18,
  padding: 12,
}));

const InputStyled2 = styled("input")(({ theme }) => ({
  width: "100%",
  height: 28,
  backgroundColor: "transparent",
  border: "0px",
  borderBottom: "1px solid #fff",
  color: "#fff",

  outline: "none",
}));

const LabelStyled = styled(Typography)(({ theme }) => ({
  //color: "#fff",
  display: "flex",
  fontSize: 14,
}));

export default InputC;
