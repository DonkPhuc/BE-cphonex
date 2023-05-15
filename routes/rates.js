const ratesController = require("../controllers/ratesController");

const router = require("express").Router();

router.get("/rate", ratesController.getAllRates);

router.post("/rate/add", ratesController.addRate);
router.post("/rate/update/:id", ratesController.updateRate);

router.delete("/rate/delete/:id", ratesController.deleteRate);

module.exports = router;
