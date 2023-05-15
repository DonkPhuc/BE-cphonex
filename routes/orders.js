const ordersController = require("../controllers/ordersController");

const router = require("express").Router();

router.get("/order", ordersController.getAllOrders);
router.get("/order/:id", ordersController.getOrder);

router.post("/order/add", ordersController.addOrder);
router.post("/order/update/:id", ordersController.updateOrder);

router.delete("/order/delete/:id", ordersController.deleteOrder);

module.exports = router;
