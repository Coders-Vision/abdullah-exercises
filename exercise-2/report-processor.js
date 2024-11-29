const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Function to parse the CSV file and accumulate data
async function parseCSV(filePath) {
  const productTotals = {};
  const brandCounts = {};

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const [id, area, productName, quantity, brand] = line.split(",");
    const qty = parseInt(quantity, 10);

    // Update product totals
    if (!productTotals[productName]) {
      productTotals[productName] = { quantity: 0, orders: 0 };
    }
    productTotals[productName].quantity += qty;
    productTotals[productName].orders += 1;

    // Update brand counts
    if (!brandCounts[productName]) {
      brandCounts[productName] = {};
    }
    if (!brandCounts[productName][brand]) {
      brandCounts[productName][brand] = 0;
    }
    brandCounts[productName][brand] += 1;
  }

  return { productTotals, brandCounts };
}

async function generateReports(inputFileName) {
  const filePath = path.resolve(inputFileName);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  const { productTotals, brandCounts } = await parseCSV(filePath);
  //   console.log("Products by QTY and Orders", productTotals);
  //   console.log("No. of Product Brand in Orders", brandCounts);
  writeAverageQuantities(`0_${inputFileName}`, productTotals);
}

function writeAverageQuantities(outputFileName, productTotals) {
  // Converting the 'productTotals' to an array by extracting its key to consolidate the total sum of orders by using 'reduce' function
  const totalOrders = Object.values(productTotals).reduce(
    (acc, item) => acc + item.orders,
    0
  );
  const outputData = Object.entries(productTotals)
    .map(([productName, totals]) => {
      const avgQuantity = totals.quantity / totalOrders;
      return `${productName},${avgQuantity.toFixed(3)}`;
    })
    .join("\n");

  fs.writeFileSync(outputFileName, outputData);
  console.log(`Created file ${outputFileName}`);
}

// Entry point
(async () => {
  const inputFileName = process.argv[2];
  if (!inputFileName) {
    console.error("Please provide the input file name.");
    process.exit(1);
  }

  await generateReports(inputFileName);
})();
