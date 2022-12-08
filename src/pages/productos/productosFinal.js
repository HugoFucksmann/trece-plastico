import { Typography } from "@mui/material";
import logoCol from "../../assets/Productos/ColossacLogo.png";
import fondoCol from "../../assets/Productos/FondoColossac.png";
import final1 from "../../assets/Productos/final1.png";
import final2 from "../../assets/Productos/final2.png";
import { isMobile } from "../../helpers/isMobile";
const ProductosFinal = () => {
  return (
    <div
      style={{
        background: isMobile ? "#EBF0F1" : `url(${fondoCol}) `,
        backgroundSize: "120% 160%",
        backgroundPosition: "40% 0%",
        minheight: isMobile ? "82vh" : "96vh",
        display: "flex",
        flexDirection: "column",
        marginTop: "8vw",
      }}
    >
      <img
        src={logoCol}
        style={{
          width: isMobile ? "60vw" : "16vw",
          alignSelf: "center",
          marginTop: !isMobile ? "-7.8vw" : "-16vw",
          marginBottom: isMobile && "-8.8vw",
        }}
      />
      <Typography
        variant="h3"
        style={{
          fontFamily: "museoSansRoundedBold",
          color: "#151F5B",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        <span style={{ fontSize: "1.2em" }}> Un compañero </span>confiable
      </Typography>
      <Typography
        variant="h3"
        style={{
          color: "#151F5B",
          textAlign: "center",
          fontFamily: "museoSansRoundedBold",
        }}
      >
        para las tareas del hogar.
      </Typography>
      <div
        style={{
          display: "flex",
          width: isMobile ? "94%" : "34%",
          margin: "80px auto",
        }}
      >
        <ItemSlider obj={unoS1} />
        <ItemSlider obj={dosS1} />
      </div>
    </div>
  );
};

const ItemSlider = ({ obj }) => {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 40,
        paddingRight: isMobile ? 10 : 20,
        paddingLeft: isMobile ? 10 : 20,
        textAlign: "center",
      }}
    >
      <img
        src={obj.img}
        alt={obj.title}
        style={{ height: "auto", width: "100%" }}
      />

      <Typography
        variant="h4"
        style={{ marginTop: 16, fontFamily: "museoSansRoundedBold" }}
      >
        {obj.title}
      </Typography>
      <Typography
        variant="h5"
        style={{ fontWeight: "normal", marginBottom: 12 }}
      >
        {obj.sub}
      </Typography>

      <Typography
        variant="h5"
        style={{ fontWeight: "normal", marginBottom: 12 }}
      >
        {obj.txt}
      </Typography>

      {obj.types.map((text) => (
        <Typography key={text} variant="h6" color={"#000"}>
          {text}
        </Typography>
      ))}
    </div>
  );
};

const unoS1 = {
  img: final1,
  title: "Bolsas de Residuos",
  sub: "",
  txt: `Confeccionadas en dos medidas
  diferentes, pueden ser adquiridas
  en paquetes de 10 unidades.`,

  types: ["45x60 cm.", "50x70 cm."],
};

const dosS1 = {
  img: final2,
  title: "Bolsas de Consorcio",
  sub: "Linea estándar",
  txt: `Confeccionadas en tres medidas
  diferentes, pueden ser adquiridas
  en paquetes de 10 unidades.`,

  types: ["60x90 cm.", "80x100 cm.", "90x120 cm."],
};

export default ProductosFinal;
