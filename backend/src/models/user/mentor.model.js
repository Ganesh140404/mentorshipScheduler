// Mentor:{_id:
// email:
// ph no:
// Name
// expertise[]
// Slots[SlotIds from slots collection]
// }
import { Schema, Model } from "mongoose";
const mentorSchema=new Schema({
    
        userId: { type: Schema.Types.ObjectId, ref: "user", default: null },
    expertise:{
        type:Array,
        required:true
    },
    slots:{
        type:Array,
        required:true
    },
})
export const mentor=Model('mentor',mentorSchema)