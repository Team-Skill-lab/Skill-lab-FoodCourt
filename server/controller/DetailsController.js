const { Student, Teacher, Food } = require('../models/Users');

let createEntities = async (req, res) => {
    try {
        let data = req.body;

        let student = await Student.create(data);
        
       
        let teacher = await Teacher.create(data);

      
        let food = await Food.create(data);

        res.send({
            msg: "Entities Created Successfully",
            student: student,
            teacher: teacher,
            food: food
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ msg: "Error creating entities", error: error.message });
    }
};

module.exports = { createEntities };
