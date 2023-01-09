import * as React from "react";
import Typography from "@mui/material/Typography";

import lugar from "../../assets/Dondecomprar/Lugar.png";
import { Avatar } from "@mui/material";

export const dondeComprarData = [
  {
    dire: "Todo Limpio Luján",
    subDire: "Av. Constitucion 1803, esq. Vicente Lopez, Lujan, Buenos Aires",
  },
  { dire: "Hasso", subDire: "Brandsen 1595, Formosa, Formosa" },
  {
    dire: "SuperLimp",
    subDire: "Av. Leandro N. Alem 1736, Ushuaia, Tierra del Fuego",
  },
  {
    dire: "Teddy Distribuidora",
    subDire: "Ramos Mejía, La Matanza, Buenos Aires",
  },
  {
    dire: "Burbujas Sueltas",
    subDire: "Pérez Quintana 1103, Ituzaingó, Buenos Aires",
  },
  {
    dire: "Neptuno 21",
    subDire: "Rondeau 781, Ramos Mejía, La Matanza, Buenos Aires",
  },
  { dire: "Selclean", subDire: "Bahía Blanca 185, Neuquén, Neuquén" },
  {
    dire: "La Fragancia",
    subDire: "Belgrano 529, Carmen de Patagones, Buenos Aires",
  },
  {
    dire: "Mym Total Tuján",
    subDire: "Saavedra 289, Ramos Mejía, La Matanza, Buenos Aires",
  },
  {
    dire: "Insumos Mitre",
    subDire: "Av. Bartolome Mitre 4010, Caseros, Buenos Aires",
  },
  { dire: "Mandala Cleaning", subDire: "General Pacheco, Tigre, Buenos Aires" },
  { dire: "Get Clean", subDire: "Ramos Mejía, La Matanza, Buenos Aires" },
  { dire: "Armony", subDire: "La Cascada 625, Bariloche, Rio Negro" },
  {
    dire: "Super Limp Luján",
    subDire: "Padre Agostini 96, El Calafate, Santa Cruz",
  },
  {
    dire: "Sessa Y Yuján",
    subDire: "Av. Rivadavia 3119, Comodoro Rivadavia, Chubut",
  },
  {
    dire: "Yoma Motores",
    subDire: "Av. Pte. Perón Oeste 2211, Río Cuarto, Córdoba",
  },
  {
    dire: "MTM Descartables Y Embalaje",
    subDire: "Juan Zanella 4655, Caseros, Buenos Aires",
  },
  {
    dire: "MTM Descartables Y Embalaje",
    subDire: "Calle 15 N°687, Colón, Buenos Aires",
  },
  { dire: "Limpieza Online", subDire: "Inmigrantes 180, Trelew, Chubut" },
];

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
          <img
            alt={obj.dire}
            src={lugar}
            style={{
              height: 32,
              marginTop: 10,

              marginRight: 20,
            }}
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
