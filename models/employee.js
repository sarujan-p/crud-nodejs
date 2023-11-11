const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    department: {
        type: String,
        require: true,
        default: '',
    },
})

const employee = mongoose.model('employees', employeeSchema)
module.exports = employee
