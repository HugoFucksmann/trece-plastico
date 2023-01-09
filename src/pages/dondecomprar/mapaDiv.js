import { useContext } from "react";
import { TreceContext } from "../../context/treceContext";
import { isMobile } from "../../helpers/isMobile";
import TitleTrece from "../../shared/title";

const MapaDiv = () => {
  /*   const {} = useContext(TreceContext); */
  return (
    <div style={{ marginTop: 100, marginBottom: 80 }}>
      <TitleTrece>
        Nuestras líneas de bolsas son distribuidas y comercializadas en gran
        parte de la Argentina. <br />
        <br />
        <span>¡Buscá el punto de venta más cercano!</span>
      </TitleTrece>
      <br />
      <iframe
        loading="lazy"
        style={{
          height: isMobile ? "42vh" : "64vh",
          width: "100%",
          border: "0px",
        }}
        src="https://www.google.com/maps/d/u/2/embed?mid=1_MBnAc0BLzPlVFPDwjDnUmMsbDNJd2M&ehbc=2E312F"
      />
    </div>
  );
};

export default MapaDiv;
