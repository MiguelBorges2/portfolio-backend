import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/download/curriculo", (req, res) => {
    const filePath = path.join(__dirname, "files", "MiguelBRCurriculo.pdf");
  
  // Envia o PDF como buffer (bytes) no corpo da resposta

  const data = fs.readFileSync(filePath);
  
  res.setHeader("Content-Type", "application/pdf"); // tipo de arquivo
  res.send(data); // envia os dados brutos
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});