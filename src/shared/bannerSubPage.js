import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { isMobile } from "../helpers/isMobile";

import banner from "../assets/bannerSubPage.png";

const BannerSubPage = ({ page }) => {
  return (
    <ContainerDiv>
      <Typography
        variant="h1"
        style={{
          marginTop: 30,
          marginRight: isMobile && "4%",
          marginLeft: isMobile && "4%",
          fontSize: !isMobile && "3.2rem",
        }}
      >
        {page.first}
      </Typography>
      <Typography
        variant="h1"
        style={{
          marginRight: isMobile && "4%",
          marginLeft: isMobile && "4%",
          fontSize: !isMobile && "3.2rem",
        }}
      >
        {page.second}
        <span style={{ color: "#47CBBA" }}> {page.last.toUpperCase()} </span>
      </Typography>

      <Typography
        variant="h4"
        style={{
          marginTop: 30,
          marginRight: isMobile ? "4%" : "14%",
          marginLeft: isMobile ? "4%" : "14%",
        }}
      >
        {page.subTitle}
      </Typography>
    </ContainerDiv>
  );
};

const ContainerDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  height: isMobile ? "44vh" : "56vh",
  background: `url(${banner})`,
  marginTop: isMobile && "8%",
  paddingRight: !isMobile ? "22%" : "4%",
  paddingLeft: !isMobile ? "22%" : "4%",
}));

export default BannerSubPage;
