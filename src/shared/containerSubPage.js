import styled from "@emotion/styled";
import { isMobile } from "../helpers/isMobile";

const ContainerSubPage = (props) => {
  return <ContainerDiv>{props.children}</ContainerDiv>;
};

const ContainerDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  paddingRight: !isMobile ? "14%" : "8%",
  paddingLeft: !isMobile ? "14%" : "8%",
  maxWidth: 1400,
  margin: "auto",
}));

export default ContainerSubPage;
