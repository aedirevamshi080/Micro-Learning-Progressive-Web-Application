const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
const clientPath = path.join(__dirname, "../client");
const indexPath = path.join(clientPath, "index.html");

app.use(cors());
app.use(express.json());
app.use(express.static(clientPath, { index: "index.html" }));

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/sync", require("./routes/progress"));

app.use((req, res) => {
  res.sendFile(indexPath);
});

const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });
};

start();