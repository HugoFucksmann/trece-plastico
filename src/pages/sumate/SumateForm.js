import { useState } from "react";
import { Grid, styled, Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";
import InputC from "../../shared/input";
import BtnRounded from "../../shared/btnRounded";

const SumateForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    nombrecomercio: "",
    producto: "",
    rubro: "",
    telefono: "",
  });

  return (
    <form
      action="https://formsubmit.co/info@plasticosgaetani.com.ar"
      method="POST"
    >
      <GridForm
        container
        spacing={2}
        style={{ backgroundColor: "#EBF0F1", marginTop: 40 }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h3" style={{ marginBottom: isMobile ? 20 : 40 }}>
            Completá nuestro formulario y nuestros representantes se pondrán en
            contacto con vos:
          </Typography>
        </Grid>
        {campos.map(({ md, name, campo }) => (
          <Grid item xs={12} md={md} key={name}>
            <InputC
              label={name}
              name={name}
              onChange={(e) =>
                setFormData({ ...formData, [campo]: e.target.value })
              }
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <BtnRounded
            type="submit"
            style={{
              background: "#47CBBA",
              fontFamily: "museoSansRoundedBold",
              width: "40%",
            }}
          >
            Enviar
          </BtnRounded>
        </Grid>
      </GridForm>
    </form>
  );
};

const GridForm = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  borderRadius: 8,
  padding: !isMobile ? "60px 14%" : "50px 8%",
  marginBottom: 80,
}));

const campos = [
  { md: 12, name: "Nombre y Apellido", campo: "nombre" },
  { md: 12, name: "Nombre de tu comercio", campo: "nombrecomercio" },
  { md: 6, name: "Rubro", campo: "rubro" },
  { md: 6, name: "Ciudad", campo: "ciudad" },
  {
    md: 12,
    name: "¿Te interesa algún producto en particular?",
    campo: "producto",
  },
  { md: 6, name: "Teléfono", campo: "telefono" },
  { md: 6, name: "Email", campo: "email" },
];

export default SumateForm;
