import { Typography } from "@mui/material";

const TitleTrece = (props) => {
  const { border = 36 } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 40,
      }}
    >
      <Typography variant="h2" color={"#000"} {...props}>
        {props.children}
      </Typography>
      <div
        style={{
          borderTop: "4px solid #6ec4b0",
          width: border,
          marginTop: 3,
          borderRadius: 15,
          alignSelf: "center",
        }}
      />
    </div>
  );
};

export default TitleTrece;
