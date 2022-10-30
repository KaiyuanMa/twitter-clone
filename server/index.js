const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const setUp = async () => {
  app.listen(port, () => console.log(`listening on port ${port}`));
};

setUp();
