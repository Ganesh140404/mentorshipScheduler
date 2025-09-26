// Slots{
// Title
// link
// date and time
// Completed
// requests[[]]
// capacity
// }
import { Model, Schema,model  } from "mongoose";
const slotSchema=new Schema({
        userId: { type: Schema.Types.ObjectId, ref: "user", default: null },

    title:{
        type: String,
        required:true
    },
    link:{
        type:String,
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    requests:{
        type:Array
    },
    capacity:{
        type:Number,
        required:true
    }
})
export const Slot=Model('slot',slotSchema)