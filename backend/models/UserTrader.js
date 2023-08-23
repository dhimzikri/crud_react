import mongoose from "mongoose";
 
const UserTrader = mongoose.Schema({
    user_name:{
        type: String,
        required: true
    },
    full_name:{
        type: String,
        required: true
    },
    sat_ker:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    // trx_type:{
    //     type: String,
    //     required: true
    // },

    // BBGfitID:{
    //     type: String,
    //     required: true
    // },
    
    // mech_trx:{
    //     type: String,
    //     required: true
    // },
    // issues:{
    //     type: String,
    //     required: true
    // },
    // note:{
    //     type: String,
    //     required: true
    // },
    // status:{
    //     type: String,
    //     required: true
    // },
});
 
export default mongoose.model('UsersTrader', UserTrader);