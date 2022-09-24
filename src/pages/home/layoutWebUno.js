import PropTypes from "prop-types";
import { isMobile } from "../../helpers/isMobile";

//* props del componente
//? Landing, header, body, footer

const LayoutWebUno = (props) => {
  const { landing, footer } = props;
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={classes.landing}>{landing}</div>
      <div className={classes.body}>{props.children}</div>
      <div className={classes.footer}>{footer}</div>
    </div>
  );
};

const classes = {
  header: {
    height: "9vh",
    position: "absolute",
  },
  landing: { maxHeight: "100vh" },
  body: {
    padding: 30,
    paddingRight: !isMobile ? "10%" : "2%",
    paddingLeft: !isMobile ? "10%" : "2%",
  },
  //footer: { height: "20vh" },
};

LayoutWebUno.propTypes = {
  header: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,

  landing: PropTypes.element.isRequired,
};

export default LayoutWebUno;
