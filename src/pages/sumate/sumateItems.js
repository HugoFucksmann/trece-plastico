import { Grid, Typography } from "@mui/material";
import { sumateItemsData } from "../../context/dataTrece";
import { isMobile } from "../../helpers/isMobile";

const SumateItems = () => {
  return (
    <div
      style={{
        marginRight: !isMobile && "16%",
        marginLeft: !isMobile && "16%",
        marginTop: 120,
        marginBottom: 40,
      }}
    >
      <Typography variant="h3">
        Diversificá tu propuesta con{" "}
        <span style={{ color: "#47CBBA" }}> productos </span>
      </Typography>
      <Typography variant="h3" style={{ marginBottom: 20, color: "#47CBBA" }}>
        confiables y de la más alta calidad.
      </Typography>
      <Typography variant="h3">Siendo parte de nuestra red de</Typography>
      <Typography variant="h3" style={{ marginBottom: 60 }}>
        distribuidores, obtenés:
      </Typography>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {sumateItemsData.map((obj, i) => (
          <Grid item xs={12} sm={6} md={4} key={obj.txt}>
            <img src={obj.icon} style={{ width: isMobile ? "30%" : "64%" }} />
            <Typography
              variant={isMobile ? "h4" : "h5"}
              style={{ height: 40, marginTop: 10 }}
            >
              {" "}
              {obj.txt}{" "}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const campos = [
  { md: 6, name: "Nombre" },
  { md: 6, name: "Email" },
  { md: 12, name: "Mensaje" },
];

export default SumateItems;
