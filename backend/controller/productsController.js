const {
  allProductsServices,
  byIdProductsServices,
} = require("../services/productsServices");

const allProductsController = async (req, res) => {
  try {
    // data from frontend

    // db logic
    const allProducts = await allProductsServices();

    // data to frontend
    res.status(200).json({
      message: "ALL PRODUCTS FETCHED SUCCESSFULLY",
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

const byIdProductsController = async (req, res) => {
  try {
    // data from frontend
    const { product_id } = req.params;

    // db logic
    const product = await byIdProductsServices(product_id);

    // data to frontend
    res.status(200).json({ message: "SUCCESS", data: product });
  } catch (error) {
    if (error.message == "PRODUCT NOT FOUND") {
      return res
        .status(404)
        .json({ message: error.message, error: error.message });
    }

    res
      .status(500)
      .json({ message: "INTERNAL SERVER ERROR", error: error.message });
  }
};

module.exports = { allProductsController, byIdProductsController };
