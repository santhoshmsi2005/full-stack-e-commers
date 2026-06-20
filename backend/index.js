const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");

const app = express()
app.use(cors())

app.use("/", productsRoutes)

const PORT = 8000;
app.listen(PORT, () => {
    console.log("API IS WORKING...", PORT);
})