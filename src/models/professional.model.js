const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { Schema } = mongoose;
const professionalSchema = mongoose.Schema(
    {
      people:{
          type: Schema.Types.ObjectId,
          require:true,
          ref: 'People',
          trim: true,
        },
      worksFor:{
          type: Schema.Types.ObjectId,
          require:true,
          ref: 'WorksFor',
          trim: true,
        },
        degree: {
        type: String,
        required: true,
        trim: true,
      },
      experience: {
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
    professionalSchema.plugin(toJSON);
    professionalSchema.plugin(paginate);
    
  const professional = mongoose.model("Professional",professionalSchema);
  
  module.exports = professional;
  