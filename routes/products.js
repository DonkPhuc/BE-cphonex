const productsController = require("../controllers/productsController");

const router = require("express").Router();

router.get("/product", productsController.getAllProducts);
router.get("/product/:id", productsController.getProduct);
router.get("/product/search/:name", productsController.getSearchProduct);

router.post("/product/add", productsController.addProduct);
router.post("/product/update/:id", productsController.updateProduct);
router.post("/product/cart/:username", productsController.addProductToCart);
router.post(
  "/product/update/quantity/:username",
  productsController.updateProductOnCart
);
router.post(
  "/product/favorite/:username",
  productsController.addProductToFavorite
);
router.post("/product/rate/:id", productsController.addRateToProduct);

router.delete("/product/delete/:id", productsController.deleteProduct);
router.delete(
  "/product/cart/delete/:username/:id",
  productsController.deleteProductOnCart
);
router.delete(
  "/product/favorite/delete/:username/:id",
  productsController.deleteProductOnFavorite
);

module.exports = router;
