const express = require("express");
const productsRoute = require("./routes/ProductsRoutes");
const cors = require("cors")

const app = express()
app.use(cors())

app.use("/", productsRoute)

const PORT = 8000;
app.listen(PORT, () => {
    console.log("API IS WORKING...", PORT);
})