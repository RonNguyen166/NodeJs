const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const {Schema} = mongoose;
const worksForSchema = mongoose.Schema(
    {
      company:{
        type: Schema.Types.ObjectId,
        require:true,
        ref: 'Companies',
        trim: true,
      },
      dateOfJoining: {
        type: Date,
        required: true,
        trim: true,
      },
      salary: {
        type: Number,
        required: true,
        trim: true,
      },
     
    },
    {
      timestamps: true,
    }
  );
  
  // add plugin that converts mongoose to json
    worksForSchema.plugin(toJSON);
    worksForSchema.plugin(paginate);
    
  const worksFor = mongoose.model("WorksFor",worksForSchema);
  
  module.exports = worksFor;
  