const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const studentSchema = mongoose.Schema(
    {
      idSV: {
        type: Number,
        required: true,
        trim: true,
            minlength: 8,
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Invalid email');
          }
        },
      },
      address:{
        type: String,
        require: true,
        trim: true,
      },
      born: {
        type: Date,
        require:true,
        trim:true,
      }
    },
    {
      timestamps: true,
    }
  );
  
  // add plugin that converts mongoose to json
  studentSchema.plugin(toJSON);
    studentSchema.plugin(paginate);
    studentSchema.statics.isEmailTaken = async function (email, excludeStudentId) {
      const student = await this.findOne({ email, _id: { $ne: excludeStudentId } });
      return !!student;
    };
    
  const student = mongoose.model("Student",studentSchema);
  
  module.exports = student;
  