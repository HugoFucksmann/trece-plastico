import React, { createContext, Component } from "react";

import header1 from "../assets/home/Header.png";
import industriales from "../assets/home/Industriales.png";
import institucionales from "../assets/home/Institucionales.png";
import domiciliarias from "../assets/home/Domiciliarias.png";

export const TreceContext = createContext();

class TreceProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      landingData: landingData,
      productosData: productosData,
    };
  }

  async componentDidMount() {
    this.setState({
      ready: true,
    });
  }

  render() {
    if (!this.state.ready) return <h1>Loading...</h1>;

    return (
      <TreceContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </TreceContext.Provider>
    );
  }
}

const landingData = [
  {
    img: header1,
    txtT: `No mas derrames o bolsas rotas`,

    txt1: "Eleginos y logra el mejor resultado en tus tareas de todos los dias",
  },
  {
    img: header1,
    txtT: `No mas <span style="color:blue">derrames</span><br/> o bolsas rotas`,
    txt1: "texto 2",
  },
  {
    img: header1,
    txtT: `No mas derrames<br/> o bolsas rotas`,
    txt1: "texto 3",
  },
];

const productosData = {
  title: "Productos",
  subtitle: `Bolsas de reciduos y consorcio fabricadas con polietileno de baja  densidad negro reciclado, en presentacion de 10 unidades por paquete`,
  btnText: "Ver Mas",
  func: () => {},
  productos: [
    {
      img: industriales,
      name: "Industriales",
      descripcion:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab.",
    },
    {
      img: institucionales,
      name: "Institucionales",
      descripcion:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab.",
    },
    {
      img: domiciliarias,
      name: "Domiciliarias",
      descripcion:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab.",
    },
  ],
};

export default TreceProvider;
