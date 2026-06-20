const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const allProductsServices = () => {
  const products = prisma.products.findMany();
  return products;
};

const byIdProductsServices = async (product_id) => {
  const product = await prisma.products.findUnique({
    where: {
      product_id: product_id,
    },
  });

  if (!product) {
    throw new Error("PRODUCT NOT FOUND");
  }

  return product;
};

module.exports = { allProductsServices, byIdProductsServices };
