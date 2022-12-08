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
      <Grid container spacing={4} style={{ marginTop: isMobile && -80 }}>
        <GridImg imagen={data.imagen} first={true} />

        <GridText text={data.text} first={false} istitle={istitle} />
      </Grid>
    </div>
  );
};

const GridImg = ({ imagen, first }) => {
  return (
    <Grid
      item
      md={5}
      xs={12}
      style={{ display: isMobile && "flex", marginTop: isMobile && 30 }}
    >
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
      <StyledSeparator />
      <StyledText variant="h4">{text.txt1}</StyledText>
      <br />
      <StyledText variant="h4">{text.txt2}</StyledText>
      <br />
      <StyledText variant="h4">{text.txt3}</StyledText>
    </Grid>
  );
};

const StyledImg = styled("img")(({ theme }) => ({
  width: isMobile ? "54%" : "78%",
  height: isMobile ? "auto" : "auto",
  // borderRadius: "50%",
}));

const StyledSeparator = styled("div")(({ theme }) => ({
  width: 36,
  borderBottom: "4px solid #00C5B1",
  borderRadius: 5,
  marginBottom: 40,
  marginTop: 10,
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: "grey",
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
