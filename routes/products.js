const productsController = require("../controllers/productsController");

const router = require("express").Router();

router.get("/product", productsController.getAllProducts);
router.get("/product/:id", productsController.getProduct);

router.post("/product/add", productsController.addProduct);
router.post("/product/update/:id", productsController.updateProduct);
router.post("/product/cart/:username", productsController.addProductToCart);

router.delete("/product/delete/:id", productsController.deleteProduct);
router.delete(
  "/product/cart/delete/:username/:id",
  productsController.deleteProductOnCart
);

module.exports = router;
