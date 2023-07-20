import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type :String,
        required: true,
    },
    
    trx_type:{
        type: String,
        required: true
    },

    BBGfitID:{
        type: String,
        required: true
    },
    
    mech_trx:{
        type: String,
        required: true
    },
    issues:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: false
    },
    status:{
        type: String,
        required: true
    },
});
 
export default mongoose.model('Users', User);