import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;
app.get("/download/curriculo", (req, res) => {
   const filePath = path.join(__dirname, "files", "MiguelBRCurriculo.pdf");
   res.download(filePath, "MiguelBRCurriculo.pdf");
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});