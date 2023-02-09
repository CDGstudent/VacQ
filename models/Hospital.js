const mongoose = require('mongoose');
const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name cannot be more than 50 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    district: {
        type: String,
        required: [true, 'Please add a district']
    },
    province: {
        type: String,
        required: [true, 'Please add a province']
    },
    postalcode: {
        type: String,
        required: [true, 'Please add an address'],
        maxlength:[50,'Postal code cannot be more than 5 digits']
    },
    tel: {
        type:String
    },
    region: {
        type: String,
        required: [true, 'Please add a region']
    }
}
);

module.exports = mongoose.model('Hospital',HospitalSchema);