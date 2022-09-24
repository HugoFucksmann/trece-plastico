import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import { dataItem } from "../productos/productosData";

const DescriptionDiv = (props) => {
  const { orden = 0, data } = props;

  return (
    <div
      style={{
        marginBottom: isMobile ? 60 : 80,
        marginTop: isMobile ? 60 : 80,
      }}
    >
      {orden === 0 ? (
        <Grid container spacing={4}>
          <GridImg imagen={data.imagen} first={true} />

          <GridText text={data.text} first={false} />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <GridText text={data.text} first={true} />

          <GridImg imagen={data.imagen} first={false} />
        </Grid>
      )}
    </div>
  );
};

const GridImg = ({ imagen, first }) => {
  return (
    <Grid item md={6} xs={12}>
      <StyledImg src={imagen} />
    </Grid>
  );
};

const GridText = ({ text, first }) => {
  return (
    <Grid
      item
      md={6}
      xs={12}
      style={{
        marginBottom: !isMobile && first && 24,
        marginRight: isMobile && "4%",
        marginLeft: isMobile && "4%",
        textAlign: "left",
      }}
    >
      <Typography variant="h2">{text.title1}</Typography>
      <Typography variant="h2">{text.title2}</Typography>
      <div
        style={{
          width: 36,
          borderBottom: "4px solid #00C5B1",
          borderRadius: 5,
          marginBottom: 20,
        }}
      ></div>
      <Typography variant="h4">{text.txt}</Typography>
    </Grid>
  );
};

const StyledImg = styled("img")(({ theme }) => ({
  width: isMobile ? "74%" : "74%",
  height: isMobile ? "auto" : "auto",
  borderRadius: "50%",
}));

DescriptionDiv.defaultProps = {
  orden: 0,
  data: {
    text: {
      title1: "",
      title2: "",
      txt: "",
    },
    imagen: "",
  },
};

export default DescriptionDiv;
