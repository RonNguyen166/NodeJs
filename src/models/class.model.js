const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require('./plugins');
const classSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    numberStudent:{
        type: Number,
        required: true,
    }
})
classSchema.plugin(toJSON);
classSchema.plugin(paginate);
classSchema.statics.isName = async function (name, excludeStudentId) {
    const _class = await this.findOne({ name, _id: { $ne: excludeStudentId } });
    return !!_class;
  };
const lop = mongoose.model("classes", classSchema);
  
module.exports = lop;
