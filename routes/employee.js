const express = require('express')
const router = express.Router()
const { 
    createEmployee, 
    getEmployees, 
    getEmployee, 
    updateEmployee, 
    deleteEmployee
} = require('../controllers/employee')

router.route('/')
    .get(getEmployees)
    .post(createEmployee)

router.route('/:id')
    .get(getEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee)

module.exports = router