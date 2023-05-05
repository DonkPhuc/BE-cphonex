const customersController = require("../controllers/customersController");
const productsController = require("../controllers/productsController");

const router = require("express").Router();

router.post("/customer", customersController.addCustomer);
router.get("/customer", customersController.getAllCustomers);
router.get("/customer/:username", customersController.getCustomer);
router.put("/customer/:username", customersController.updateCustomer);
router.delete("/customer/:id", customersController.deleteCustomer);

router.post("/product", productsController.addProduct);
router.get("/product", productsController.getAllProducts);

module.exports = router;
