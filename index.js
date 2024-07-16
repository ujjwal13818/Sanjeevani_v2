const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

//rest object
const app = express();

  connectDB();

//midllewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const port = process.env.PORT || 8080;

// Test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth/", require("./routes/authRoutes"));
app.use("/api/v1/inventory/", require("./routes/inventoryRoutes"));
app.use("/api/v1/inventory/", require("./routes/inventoryRoutes"));



app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
