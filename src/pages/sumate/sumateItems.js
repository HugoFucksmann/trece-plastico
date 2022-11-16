import { Grid, Typography } from "@mui/material";
import { sumateItemsData } from "../../context/dataTrece";
import { isMobile } from "../../helpers/isMobile";

const SumateItems = () => {
  return (
    <div style={useStyles.containerDiv}>
      <div style={useStyles.divText}>
        <Typography variant="h3">
          Diversificá tu propuesta con{" "}
          <span style={{ color: "#47CBBA" }}> productos </span>
        </Typography>
        <Typography variant="h3" style={{ marginBottom: 20, color: "#47CBBA" }}>
          confiables y de la más alta calidad.
        </Typography>
        <Typography variant="h3">Siendo parte de nuestra red de</Typography>
        <Typography variant="h3">distribuidores, obtenés:</Typography>
      </div>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {sumateItemsData.map((obj, i) => (
          <Grid item xs={4} sm={4} md={4} key={obj.txt} style={useStyles.grid}>
            <img src={obj.icon} style={useStyles.imgIcon} />
            <Typography variant="h4" style={useStyles.text}>
              {obj.txt}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = {
  containerDiv: {
    marginRight: !isMobile && "16%",
    marginLeft: !isMobile && "16%",
    marginTop: 120,
    marginBottom: 40,
  },
  divText: { marginBottom: !isMobile ? 160 : 60 },
  grid: { marginBottom: !isMobile && 50 },
  text: {
    height: 42,
    marginTop: 12,
    fontFamily: "museoSansRoundedBold",
    color: "#5F6F81",
    fontSize: isMobile && "0.8rem",
  },
  imgIcon: { width: isMobile ? "84%" : "64%" },
};

export default SumateItems;
