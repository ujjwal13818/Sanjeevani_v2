const  express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { inventoryController, getInventoryController, getDonarsController } = require('../controllers/inventoryController');


const router = express.Router();

router.post("/create-inventory", authMiddleware, inventoryController);

router.get('/get-inventory' , authMiddleware , getInventoryController);


router.get("/get-donars", authMiddleware, getDonarsController);

module.exports = router;
