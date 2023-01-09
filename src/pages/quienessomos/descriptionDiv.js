import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import Compromiso from "../../assets/Quienessomos/Compromiso.png";
const DescriptionDiv = (props) => {
  const { data, istitle = true, icon } = props;

  return (
    <div
      style={{
        marginBottom: isMobile ? 60 : 80,
        marginTop: isMobile ? 60 : 120,
      }}
    >
      <Grid container spacing={4} style={{ marginTop: isMobile && -80 }}>
        <GridImg imagen={data.imagen} first={true} />

        <GridText
          text={data.text}
          first={false}
          istitle={istitle}
          icon={icon}
        />
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

const GridText = ({ text, first, istitle, icon }) => {
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
      <div style={{ display: "flex", marginBottom: 16, alignItems: "center" }}>
        {icon && (
          <img
            src={Compromiso}
            style={{ height: "11vh", marginRight: 20, marginBottom: 10 }}
          />
        )}
        <div>
          {istitle && (
            <>
              <Typography variant="h2">{text.title1}</Typography>
              <Typography variant="h2" style={{ color: "#00C5B1" }}>
                {text.title2}
              </Typography>
            </>
          )}
        </div>
      </div>
      <StyledSeparator />
      <div>
        <StyledText variant="h4">{text.txt1}</StyledText>
        <br />
        <StyledText variant="h4">{text.txt2}</StyledText>
        <br />
        <StyledText variant="h4">{text.txt3}</StyledText>
      </div>
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
  marginBottom: 20,
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
