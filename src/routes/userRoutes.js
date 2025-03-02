const express= require("express")
const router = express.Router();
const userControllers = require("../controllers/userControllers")

router.get('/', userControllers.getAllUsers)
router.get('/userId', userControllers.getUserByUserId)
router.post('/createCustomer', userControllers.createCustomer)
router.get('/getAllCustomers', userControllers.getAllCustomers)
router.get('/getCustomerById', userControllers.getCustomerById)
router.put('/updateCustomerById', userControllers.updateCustomerById)
router.delete('/deleteCustomerById', userControllers.deleteCustomerById)


module.exports= router;