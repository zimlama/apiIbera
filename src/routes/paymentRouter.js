const { Router } = require("express");
const { paymentValidation } = require("../controllers/paymentControllers");

const router = Router();

router.get("/", paymentValidation);
router.post("/generar", paymentValidation);

module.exports = router;