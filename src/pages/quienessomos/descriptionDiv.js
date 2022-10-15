import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";

const DescriptionDiv = (props) => {
  const { data, istitle = true } = props;

  return (
    <div
      style={{
        marginBottom: isMobile ? 60 : 80,
        marginTop: isMobile ? 60 : 120,
      }}
    >
      <Grid container spacing={4}>
        <GridImg imagen={data.imagen} first={true} />

        <GridText text={data.text} first={false} istitle={istitle} />
      </Grid>
    </div>
  );
};

const GridImg = ({ imagen, first }) => {
  return (
    <Grid item md={5} xs={12}>
      <StyledImg src={imagen} />
    </Grid>
  );
};

const GridText = ({ text, first, istitle }) => {
  return (
    <Grid
      item
      md={7}
      xs={12}
      style={{
        marginBottom: !isMobile && first && 24,
        marginRight: isMobile && "4%",
        marginLeft: isMobile && "4%",
        textAlign: "left",
      }}
    >
      {istitle && (
        <>
          <Typography variant="h2">{text.title1}</Typography>
          <Typography variant="h2" style={{ color: "#00C5B1" }}>
            {text.title2}
          </Typography>
        </>
      )}
      <div
        style={{
          width: 36,
          borderBottom: "4px solid #00C5B1",
          borderRadius: 5,
          marginBottom: 40,
          marginTop: 10,
        }}
      ></div>
      <Typography variant="h4">{text.txt1}</Typography>
      <br />
      <Typography variant="h4">{text.txt2}</Typography> <br />
      <Typography variant="h4">{text.txt3}</Typography>
    </Grid>
  );
};

const StyledImg = styled("img")(({ theme }) => ({
  width: isMobile ? "74%" : "70%",
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
