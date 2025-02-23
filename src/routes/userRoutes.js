const express= require("express")
const router = express.Router();
const userControllers = require("../controllers/userControllers")

router.get('/' , userControllers.getAllusers)
router.get('/userId', userControllers.getUserByUserId)
router.post('/createCustomer', userControllers.createCustomer)

module.exports= router;