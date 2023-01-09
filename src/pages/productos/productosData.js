import principal from "../../assets/Productos/principal.png";
import BBlancas from "../../assets/Productos/Blancas.png";
import Bamarillas from "../../assets/Productos/Amarillas.png";
import Bcamiseta from "../../assets/Productos/Camiseta.png";
import Bcaramelo from "../../assets/Productos/Caramelo.png";
import BverdeE from "../../assets/Productos/VerdesEstandar.png";
import BverdeR from "../../assets/Productos/VerdesResistente.png";
import Bresiduos from "../../assets/Productos/Residuos.png";
import Bpatologicas from "../../assets/Productos/Patologicas.png";
import ConsorcioEco from "../../assets/Productos/ConsorcioEconomica.png";
import ConsorcioEst from "../../assets/Productos/ConsorcioEstandar.png";
import ConsorcioRef from "../../assets/Productos/ConsorcioReforzada.png";
import ConsorcioRes from "../../assets/Productos/ConsorcioResistente.png";
import escombros from "../../assets/Productos/Escombros.png";

export const dataItem = {
  text: {
    txt: `Contamos con más de 50 productos, los cuales responden a diferentes necesidades del mercado. 
    Cada uno es realizado bajo estrictas normas de calidad, lo cual nos asegura resultados de excelencia.`,
  },
  imagen: principal,
};

const unos2 = {
  img: BBlancas,
  title: "Bolsas blancas",
  sub: "",
  txt: `Confeccionadas en cuatro medidas diferentes, pueden ser adquiridas en paquetes de 50 unidades.`,
  types: [
    "45x60 cm.",
    "60x90 cm. resistente",
    "60x90 cm. reforzada",
    "80x100 cm. reforzada",
  ],
};

const doss2 = {
  img: BverdeE,
  title: "Bolsas verdes",
  sub: "Línea estándar",
  txt: `Confeccionadas en tres medidas diferentes, pueden ser adquiridas en paquetes de 50 unidades.`,

  types: ["45x60 cm.", "50x70 cm.", "60x90 cm."],
};

const tress2 = {
  img: BverdeR,
  title: "Bolsas verdes",
  sub: "Línea resistente",
  txt: `Confeccionadas en cuatro medidas diferentes, pueden ser adquiridas en paquetes de 50 unidades.`,

  types: ["80x100 cm.", "80x110 cm.", "90x120 cm.", "100x110 cm."],
};

const cuatros2 = {
  img: Bpatologicas,
  title: "Bolsas residuos patológicos",
  sub: "",
  txt: `Confeccionadas en cinco medidas diferentes, pueden ser adquiridas en paquetes de 50 unidades. `,

  types: ["45x60 cm.", "60x90 cm.", "60x100 cm.", "80x100 cm.", "80x110 cm."],
};

const cincos2 = {
  img: escombros,
  title: "Bolsas para escombros",
  sub: "",
  txt: `Confeccionadas en una medida y super reforzadas, pueden ser adquiridas en paquetes de 50 unidades`,

  types: ["38x60 cm."],
};

const seiss2 = {
  img: Bcaramelo,
  title: "Bolsas caramelo",
  sub: "",
  txt: `Confeccionadas en seis medidas diferentes y reforzadas, pueden ser adquiridas en paquetes de 50 unidades`,

  types: [
    "45x60 cm.",
    "50x70 cm.",
    "60x90 cm.",
    "80x100 cm.",
    "90x120 cm.",
    "100x110 cm.",
  ],
};

const sietes2 = {
  img: Bamarillas,
  title: "Bolsas amarillas",
  sub: "",
  txt: `Confeccionadas en 60 micrones, pueden ser adquiridas en paquetes de 50 unidades.`,

  types: ["100x110 cm."],
};

const ochos2 = {
  img: Bcamiseta,
  title: "Bolsas camiseta",
  sub: "",
  txt: `Producto de baja densidad, confeccionado en tres medidas diferentes. Puede ser adquirido en paquetes de 100 unidades.`,

  types: ["30x40 cm.", "40x50 cm.", "50x60 cm."],
};

//-----------------------

const unoS1 = {
  img: Bresiduos,
  title: "Bolsas de Residuos",
  sub: "",
  txt: `Confeccionadas en dos medidas diferentes, pueden ser adquiridas en 
  paquetes de 30 o 50 unidades. `,

  types: ["45x60 cm.", "50x70 cm."],
};

const dosS1 = {
  img: ConsorcioEst,
  title: "Bolsas de Consorcio",
  sub: "Línea estándar",
  txt: `Confeccionadas en dos medidas diferentes, pueden ser adquiridas 
  en paquetes de 50 unidades.`,
  types: ["60x90 cm.", "60x100 cm."],
};

const tresS1 = {
  img: ConsorcioRes,
  title: "Bolsas de Consorcio",
  sub: "Línea resistente",
  txt: `Confeccionadas en cuatro medidas diferentes, pueden ser adquiridas en paquetes de 50 unidades.`,

  types: ["80x100 cm.", "80x110 cm.", "90x120 cm.", "100x110 cm."],
};

const cuatroS1 = {
  img: ConsorcioRef,
  title: "Bolsas de Consorcio",
  sub: "Línea reforzada",
  txt: `Confeccionadas en cuatro medidas diferentes, pueden ser adquiridas en paquetes de 50 unidades. `,

  types: ["80x100 cm.", "80x110 cm.", "90x120 cm. 50 micrones ", "100x110 cm."],
};

const cincoS1 = {
  img: ConsorcioEco,
  title: "Bolsas de Consorcio",
  sub: "Línea económica",
  txt: `Confeccionadas en dos medidas diferentes, pueden ser adquiridas en 
  paquetes de 50 unidades.`,

  types: ["60x90 cm.", "80x110 cm."],
};

export const dataProductos = [
  {
    title: "Residuos y Consorcio",
    slider: [unoS1, dosS1, tresS1, cuatroS1, cincoS1],
  },
  {
    title: "Aplicaciones Especiales",
    slider: [unos2, doss2, tress2, cuatros2, cincos2, seiss2, sietes2, ochos2],
  },
];

const final1 = {
  img: ConsorcioEco,
  title: "Bolsas de Consorcio",
  sub: "Línea económica",
  txt: `Confeccionadas en dos medidas
    diferentes, pueden ser adquiridas
    en paquetes de 50 unidades.`,

  types: ["60x90 cm.", "80x110 cm."],
};

const final2 = {
  img: ConsorcioEco,
  title: "Bolsas de Consorcio",
  sub: "Línea económica",
  txt: `Confeccionadas en dos medidas
    diferentes, pueden ser adquiridas
    en paquetes de 50 unidades.`,

  types: ["60x90 cm.", "80x110 cm."],
};

export const dataFinalProd = [
  {
    title: "",
    slider: [final1, final2],
  },
];
