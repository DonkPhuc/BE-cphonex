const productsController = require("../controllers/productsController");

const router = require("express").Router();

router.post("/product", productsController.addProduct);
router.get("/product", productsController.getAllProducts);

module.exports = router;
