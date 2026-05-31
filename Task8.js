let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
  .then((response) => response.json())
  .then((products) => {

    // Task 1: Print All Products
    products.forEach(product => {
      console.log(`Title : ${product.title}`);
      console.log(`Price : ${product.price}`);
    });

    // Task 2: Print Only Product Titles
    products.map(product => console.log(product.title));

    // Task 3: Print Total Products
    console.log("Total Products :", products.length);

    // Task 4: Print All Categories
    [...new Set(products.map(p => p.category))]
      .forEach(category => console.log(category));

    // Task 5: Print Products Above $50
    products
      .filter(product => product.price > 50)
      .forEach(product =>
        console.log(`${product.title} - ${product.price}`)
      );

    // Task 6: Print Products Below $50
    products
      .filter(product => product.price < 50)
      .forEach(product =>
        console.log(`${product.title} - ${product.price}`)
      );

    // Task 7: Find First Product Above $100
    let firstAbove100 = products.find(product => product.price > 100);
    console.log(firstAbove100);

    // Task 8: Search Product
    let searchText = "shirt";

    let searchResult = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(searchResult);

    // Task 9: Count Electronics Products
    let electronicsCount =
      products.filter(product =>
        product.category === "electronics"
      ).length;

    console.log("Electronics Count :", electronicsCount);

    // Task 10: Print Highest Price Product
    let highestPriceProduct = products.reduce((max, product) =>
      product.price > max.price ? product : max
    );
    console.log(highestPriceProduct);

    // Task 11: Print Lowest Price Product
    let lowestPriceProduct = products.reduce((min, product) =>
      product.price < min.price ? product : min
    );
    console.log(lowestPriceProduct);

    // Task 12: Calculate Total Price of All Products
    let totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    console.log("Total Price :", totalPrice.toFixed(2));

    // Task 13: Calculate Average Product Price
    let averagePrice = totalPrice / products.length;
    console.log("Average Price :", averagePrice.toFixed(2));

    // Task 14: Print Product With Highest Rating
    let highestRatingProduct = products.reduce((best, product) =>
      product.rating.rate > best.rating.rate ? product : best
    );
    console.log(
      `Title : ${highestRatingProduct.title}`
    );
    console.log(
      `Rating : ${highestRatingProduct.rating.rate}`
    );

    // Task 15: Print Product With Lowest Rating
    let lowestRatingProduct = products.reduce((low, product) =>
      product.rating.rate < low.rating.rate ? product : low
    );
    console.log(
      `Title : ${lowestRatingProduct.title}`
    );
    console.log(
      `Rating : ${lowestRatingProduct.rating.rate}`
    );

    // Task 16: Category Wise Product Count
    let categoryCount = products.reduce((acc, product) => {
      acc[product.category] =
        (acc[product.category] || 0) + 1;
      return acc;
    }, {});
    console.log(categoryCount);

    // Task 17: Create Discounted Products
    let discountedProducts = products.map(product => ({
      title: product.title,
      oldPrice: product.price,
      newPrice: +(product.price * 0.9).toFixed(2)
    }));
    console.log(discountedProducts);

    // Task 18: Sort Products Low To High
    let lowToHigh = [...products].sort(
      (a, b) => a.price - b.price
    );
    console.log(lowToHigh);

    // Task 19: Sort Products High To Low
    let highToLow = [...products].sort(
      (a, b) => b.price - a.price
    );
    console.log(highToLow);

    // Task 20: Check Any Product Above $500
    console.log(
      products.some(product => product.price > 500)
    );

    // Task 21: Check All Products Above Rating 3
    console.log(
      products.every(product => product.rating.rate > 3)
    );

    // Task 22: Print Top 5 Costliest Products
    [...products]
      .sort((a, b) => b.price - a.price)
      .slice(0, 5)
      .forEach(product =>
        console.log(product.title)
      );

    // Task 23: Print Top 5 Rated Products
    [...products]
      .sort((a, b) =>
        b.rating.rate - a.rating.rate
      )
      .slice(0, 5)
      .forEach(product =>
        console.log(
          `${product.title} - ${product.rating.rate}`
        )
      );

    // Task 24: Group Products By Category
    let groupedProducts = products.reduce(
      (acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      },
      {}
    );
    console.log(groupedProducts);

    // Task 25: Convert Product Prices To INR
    let usdToInr = 85;

    products.forEach(product => {
      console.log(
        `${product.title} - ₹${(
          product.price * usdToInr
        ).toFixed(2)}`
      );
    });

    // Task 26: Amazon Product Filter


    let amazonProducts = products.filter(
      product =>
        product.price < 500 &&
        product.rating.rate > 4 &&
        product.category === "electronics"
    );

    console.log(amazonProducts);

    // Task 27: Best Seller Product
    console.log(highestRatingProduct);

    // Task 28: Product Analytics Dashboard

    console.log("Total Products :", products.length);
    console.log(
      "Total Categories :",
      [...new Set(products.map(p => p.category))]
        .length
    );
    console.log(
      "Highest Price Product :",
      highestPriceProduct.title
    );
    console.log(
      "Lowest Price Product :",
      lowestPriceProduct.title
    );
    console.log(
      "Average Price :",
      averagePrice.toFixed(2)
    );
    console.log(
      "Best Rated Product :",
      highestRatingProduct.title
    );

    // Task 29: Inventory Report
    console.log("===== Task 29: Inventory Report =====");

    console.log(
      "Expensive Products :",
      products.filter(p => p.price > 100).length
    );

    console.log(
      "Affordable Products :",
      products.filter(p => p.price <= 100).length
    );

    console.log(
      "Electronics :",
      products.filter(
        p => p.category === "electronics"
      ).length
    );

    console.log(
      "Jewellery :",
      products.filter(
        p => p.category === "jewelery"
      ).length
    );

    console.log(
      "Mens Clothing :",
      products.filter(
        p => p.category === "men's clothing"
      ).length
    );

    console.log(
      "Womens Clothing :",
      products.filter(
        p => p.category === "women's clothing"
      ).length
    );

    // Task 30: Complete Admin Dashboard (Interview Level)
    console.log("COMPLETE ADMIN DASHBOARD");

    console.log("TOTAL PRODUCTS :", products.length);

    console.log(
      "TOTAL CATEGORIES :",
      [...new Set(products.map(p => p.category))]
        .length
    );

    console.log(
      "TOTAL PRICE :",
      totalPrice.toFixed(2)
    );

    console.log(
      "AVERAGE PRICE :",
      averagePrice.toFixed(2)
    );

    console.log(
      "HIGHEST PRICE PRODUCT :",
      highestPriceProduct.title
    );

    console.log(
      "LOWEST PRICE PRODUCT :",
      lowestPriceProduct.title
    );

    console.log(
      "BEST RATED PRODUCT :",
      highestRatingProduct.title
    );

    console.log(
      "LOWEST RATED PRODUCT :",
      lowestRatingProduct.title
    );

    console.log(
      "PRODUCTS ABOVE $100 :",
      products.filter(p => p.price > 100).length
    );

    console.log(
      "PRODUCTS BELOW $50 :",
      products.filter(p => p.price < 50).length
    );

    console.log("CATEGORY COUNTS :");
    console.log(categoryCount);

  })
  .catch((error) => {
    console.log("Error :", error);
  })
  .finally(() => {
    console.log("API Execution Completed");
  });