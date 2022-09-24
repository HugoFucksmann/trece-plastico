import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: "ventas@plasticosgaetani.com.ar",
  password: "password",
  host: "mx2.hostinger.com",
  ssl: true,
});

export async function sendMail(obj) {
  try {
    const message = await client.sendAsync({
      text: `
        Nombre Completo: ${obj.nombre},
        Rubro: ${obj.rubro},
        Ciudad: ${obj.ciudad},
        Producto: ${obj.producto},
            Telefono: ${obj.telefono}
        `,
      from: obj.from,
      to: "ventas@plasticosgaetani.com.ar",
      cc: "",
      subject: `mail formulario web de: ${obj.nombre}`,
    });
    console.log("message: ", message);
  } catch (err) {
    console.error(err);
  }
}
