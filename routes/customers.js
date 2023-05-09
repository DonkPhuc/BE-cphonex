const customersController = require("../controllers/customersController");

const router = require("express").Router();

router.get("/customer", customersController.getAllCustomers);
router.get("/customer/:username", customersController.getCustomer);

router.post("/customer/add", customersController.addCustomer);
router.post("/customer/update/:username", customersController.updateCustomer);

router.delete("/customer/delete/:id", customersController.deleteCustomer);

module.exports = router;
