/* //@ts-check */

/**
 * @file index.js is the root file of the server.
 * @author Ilan Israel Bellaiche
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Get the routes of the requests

const apiRoutes = require("./routes/api");

// Define the port who the server is launched
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use("/api", apiRoutes);
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// TEST