const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.set("port", process.env.PORT || 3001);
app.use(cors());

app.listen(app.set("port"), () => {
  console.log(`Listen in port ${app.set("port")}`);
});

//Routes
app.use(require("./routes/index"));
app.use("/api/comida", require("./routes/food"));
