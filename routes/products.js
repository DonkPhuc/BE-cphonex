const productsController = require("../controllers/productsController");

const router = require("express").Router();

router.post("/product", productsController.addProduct);
router.post("/product/update/:id", productsController.updateProduct);

router.get("/product/delete/:id", productsController.deleteProduct);
router.get("/product/cart/:username/:id", productsController.addProductToCart);
router.get("/product", productsController.getAllProducts);
router.get("/product/:id", productsController.getProduct);

module.exports = router;
