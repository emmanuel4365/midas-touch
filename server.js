import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
});

app.listen(5100, () => {
  console.log("Server is listening on port 5100...");
});
