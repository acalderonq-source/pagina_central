import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Necesario porque estamos usando ES Modules ("type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// carpeta generada por `vite build`
const distPath = path.join(__dirname, "dist");

// servir assets estáticos (JS, CSS, imágenes)
app.use(express.static(distPath));

// para cualquier ruta que no sea archivo, responder index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Render te da el puerto en process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
