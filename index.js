const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//rest object
const app = express();

//midllewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const port = process.env.PORT || 8080;

// Test route
app.use("/api/v1/test", require("./routes/testRoutes"));

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
