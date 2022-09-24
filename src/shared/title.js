import { Typography } from "@mui/material";

const TitleTrece = (props) => {
  const { border = 36 } = props;
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <Typography variant="h2">{props.children}</Typography>
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
