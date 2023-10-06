const express = require("express");
const app = express();
app.listen(3001);

app.post("/check", (req, res) => {
  res.json({
    result: 1,
  });
});
