const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const peopleSchema = mongoose.Schema(
    {
      pid: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      pName: {
        type: String,
        required: true,
        trim: true,
      },
      sex: {
        type: Boolean,
        required: true
      },
      dob:{
          type: Date,
          require: true,
          trim: true,
      },
      phone: {
          type: String,
          require: true,
          trim: true,
      },
      address:{
        type: String,
        require: true,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  // add plugin that converts mongoose to json
  peopleSchema.plugin(toJSON);
  peopleSchema.plugin(paginate);

  const people = mongoose.model("People",peopleSchema);
  
  module.exports = people;
  