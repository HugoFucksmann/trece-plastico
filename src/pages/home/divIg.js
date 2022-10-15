import { Grid } from "@mui/material";

import ig from "../../assets/home/3.png";
import { isMobile } from "../../helpers/isMobile";
import TitleTrece from "../../shared/title";

const DivIg = () => {
  return (
    <div
      style={{
        margin: isMobile ? "60px 8%" : "66px 24%",
        textAlign: "center",
      }}
    >
      <TitleTrece>@plasticosgaetani</TitleTrece>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        marginTop={4}
      >
        {igs.map((obj) => (
          <Grid
            key={obj.alt}
            item
            md={4}
            xs={6}
            style={{
              display: "flex",
              widtH: "100%",
            }}
          >
            <img src={obj.img} alt={obj.alt} style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DivIg;

const igs = [
  {
    img: ig,
    alt: "a",
  },
  {
    img: ig,
    alt: "s",
  },
  {
    img: ig,
    alt: "d",
  },
  {
    img: ig,
    alt: "ig",
  },
  {
    img: ig,
    alt: "f",
  },
  {
    img: ig,
    alt: "g",
  },
];
