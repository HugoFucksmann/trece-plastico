import { useContext, useEffect } from "react";
import { TreceContext } from "../../context/treceContext";
import BannerSubPage from "../../shared/bannerSubPage";
import ContainerSubPage from "../../shared/containerSubPage";

import { goToTop } from "../../helpers/goToTop";
import { Fade } from "@mui/material";
import SumateItems from "./sumateItems";
import SumateForm from "./SumateForm";

const Sumate = () => {
  useEffect(() => {
    goToTop();
  }, []);

  const { BannerSubPageData } = useContext(TreceContext);
  return (
    <Fade in={true}>
      <div>
        <BannerSubPage page={BannerSubPageData.sumate} />
        <ContainerSubPage>
          <SumateItems />
          <SumateForm />
        </ContainerSubPage>
      </div>
    </Fade>
  );
};

export default Sumate;
