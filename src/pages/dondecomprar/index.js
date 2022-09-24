import { useContext, useEffect } from "react";
import { TreceContext } from "../../context/treceContext";
import BannerSubPage from "../../shared/bannerSubPage";
import ContainerSubPage from "../../shared/containerSubPage";
import ItemsDirDiv from "./itemsdirdiv";
import MapaDiv from "./mapaDiv";
import { goToTop } from "../../helpers/goToTop";
import { Fade } from "@mui/material";

const DondeComprar = () => {
  useEffect(() => {
    goToTop();
  }, []);

  const { BannerSubPageData } = useContext(TreceContext);
  return (
    <Fade in={true}>
      <div>
        <BannerSubPage page={BannerSubPageData.dondecomprar} />
        <ContainerSubPage>
          <MapaDiv />
          <ItemsDirDiv />
        </ContainerSubPage>
      </div>
    </Fade>
  );
};

export default DondeComprar;
