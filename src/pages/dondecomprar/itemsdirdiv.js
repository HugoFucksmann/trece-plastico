import * as React from "react";
import Typography from "@mui/material/Typography";
import { dondeComprarData } from "../../context/dataTrece";

import lugar from "../../assets/Dondecomprar/Lugar.png";
import { Avatar } from "@mui/material";

const ItemsDirDiv = () => {
  return (
    <div style={{ marginBottom: 40 }}>
      {dondeComprarData.map((obj, i, arr) => (
        <div
          key={obj.dire + i}
          style={{
            borderBottom: i + 1 !== arr.length && "2px solid #a6a6a6",
            textAlign: "left",
            marginBottom: 34,

            paddingBottom: 20,
            display: "flex",
          }}
        >
          {" "}
          <img
            alt={obj.dire}
            src={lugar}
            style={{ marginRight: 20, height: 32, marginTop: 10 }}
          />
          <div>
            <Typography
              variant="h3"
              style={{ fontFamily: "museoSansRoundedBold" }}
            >
              {obj.dire}
            </Typography>
            <Typography variant="h4">{obj.subDire}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsDirDiv;
