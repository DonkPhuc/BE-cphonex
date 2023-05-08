const customersController = require("../controllers/customersController");

const router = require("express").Router();

router.get("/customer", customersController.getAllCustomers);
router.get("/customer/:username", customersController.getCustomer);

router.post("/customer", customersController.addCustomer);
router.post("/customer/:username", customersController.updateCustomer);

router.delete("/customer/:id", customersController.deleteCustomer);

module.exports = router;
