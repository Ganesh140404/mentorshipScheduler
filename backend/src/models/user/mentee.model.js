// Mentee{
// _id:
// email:
// ph no:
// Name
// Slots[]
// }

import { Schema, Model } from "mongoose";
const menteeSchems=new Schema({
        userId: { type: Schema.Types.ObjectId, ref: "user", default: null },

    slots:{
        type:Array,
        required:true
    },
})
export const mentee=Model('mentee',mentorSchema)
