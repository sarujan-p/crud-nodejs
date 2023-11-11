const Employee = require('../models/employee')

const createEmployee = async (req, res, next) => {
    let { name, email, department } = req.body
    let existingEmployee

    try {
        existingEmployee = await Employee.findOne({ email: email })
    } catch (err) {
        res.send({ message: err.message })
    }

    if(existingEmployee){
       res.send({ message: "Employee already exist!" }) 
    }else{
        try {
            const newEmployee = new Employee({
                name: name,
                email: email,
                department: department
            })
    
            await newEmployee.save()
            res.status(201).json({ message: "Employee successfully registered!" })
        } catch (err) {
            res.send({ message: err.message })
        }
    }
}

const getEmployees = async (req, res, next) => {
    let employees
    try {
        employees = await Employee.find()
    } catch (err) {
        res.send({ message: err.message })
    }

    if(employees.length > 0){
        res.send({ message: "Employees successfully fetched!", employees})
    }else{
        res.send({ message: "Employees does not exist!"})
    }
}

const getEmployee = async (req, res, next) => {
    let id = req.params.id
    let employee

    try {
        employee = await Employee.findById(id)
    } catch (err) {
        res.send({ message: err.message })
    }

    if(employee){
        res.send({message: "Employee data successfully fetched", employee})
    }else{
        res.send({ message: `Employee does not exist with id ${id}` })
    }
}

const updateEmployee = async (req, res, next) => {
    let id = req.params.id
    let { name, email, department } = req.body
    let employee

    try {
        const employee = await Employee.findByIdAndUpdate(
            id,
            { name, email, department },
            { new: true }
          )
      
          if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
          }

          res.send({ message: "Employee successfully updated!", employee })
    } catch (err) {
        res.send({ message: err.message })
    }    
}

const deleteEmployee = async (req, res, next) => {
    let id = req.params.id
    let employee

    try {
        employee = await Employee.findById(id)

        if(employee){
            await Employee.findByIdAndDelete(id)
            res.send({ message: "Employee successfully deleted!", employee })
        }else{
            res.send({ message: `Employee does not exist with id ${id}` })
        }
    } catch (err) {
        res.send({ message: err.message })
    }    
}

module.exports = {createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee}