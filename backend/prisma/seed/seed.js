const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const products = [
  {
    title: "iPhone 15 Pro",
    description: "Apple flagship smartphone with A17 Pro chip",
    price: "129999",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    category: "Smartphones",
    stock: 15,
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    description: "Premium Android smartphone with S Pen",
    price: "119999",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    category: "Smartphones",
    stock: 20,
  },
  {
    title: "MacBook Air M3",
    description: "Lightweight laptop powered by Apple M3 chip",
    price: "114999",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    category: "Laptops",
    stock: 10,
  },
  {
    title: "Dell XPS 15",
    description: "Premium Windows laptop for professionals",
    price: "139999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    category: "Laptops",
    stock: 12,
  },
  {
    title: "Sony WH-1000XM5",
    description: "Industry-leading noise cancelling headphones",
    price: "29999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Audio",
    stock: 30,
  },
  {
    title: "AirPods Pro 2",
    description: "Apple wireless earbuds with ANC",
    price: "24999",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    category: "Audio",
    stock: 40,
  },
  {
    title: "Apple Watch Series 9",
    description: "Advanced smartwatch with health tracking",
    price: "44999",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    category: "Wearables",
    stock: 25,
  },
  {
    title: "Samsung Galaxy Watch 6",
    description: "Feature-rich Android smartwatch",
    price: "32999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Wearables",
    stock: 22,
  },
  {
    title: "iPad Air M2",
    description: "Powerful tablet for productivity and creativity",
    price: "69999",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    category: "Tablets",
    stock: 18,
  },
  {
    title: "Logitech MX Master 3S",
    description: "Professional wireless productivity mouse",
    price: "9999",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    category: "Accessories",
    stock: 50,
  },
  {
    title: "Mechanical Gaming Keyboard",
    description: "RGB mechanical keyboard with blue switches",
    price: "6999",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    category: "Accessories",
    stock: 35,
  },
  {
    title: "PlayStation 5",
    description: "Next-generation gaming console",
    price: "54999",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    category: "Gaming",
    stock: 14,
  },
  {
    title: "Xbox Series X",
    description: "Powerful gaming console from Microsoft",
    price: "52999",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
    category: "Gaming",
    stock: 16,
  },
  {
    title: "Canon EOS R50",
    description: "Mirrorless camera for creators",
    price: "74999",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    category: "Cameras",
    stock: 8,
  },
  {
    title: "Nikon Z30",
    description: "Compact mirrorless vlogging camera",
    price: "68999",
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c",
    category: "Cameras",
    stock: 10,
  },
  {
    title: "ASUS ROG Strix G16",
    description: "High-performance gaming laptop",
    price: "149999",
    image: "https://images.unsplash.com/photo-1593642702744-d377ab507dc8",
    category: "Laptops",
    stock: 9,
  },
  {
    title: "Samsung 4K Smart TV 55 Inch",
    description: "Ultra HD smart television",
    price: "59999",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    category: "Televisions",
    stock: 12,
  },
  {
    title: "JBL Flip 6",
    description: "Portable Bluetooth speaker with deep bass",
    price: "11999",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    category: "Audio",
    stock: 28,
  },
  {
    title: "Amazon Kindle Paperwhite",
    description: "Waterproof e-reader with high-resolution display",
    price: "14999",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
    category: "Books & Readers",
    stock: 24,
  },
  {
    title: "Dyson V15 Detect",
    description: "Cordless vacuum cleaner with laser detection",
    price: "64999",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001",
    category: "Home Appliances",
    stock: 11,
  },
];

async function main() {
  await prisma.products.createMany({
    data: products,
  });

  console.log("✅ 20 Products Seeded Successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seeding Error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });