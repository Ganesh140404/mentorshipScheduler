import { Slot } from "../models/slots.model.js"
import { User } from "../models/user/user.model.js";

export const createSession=async(req,res)=>{
    try {
        const {title,startTime,endTime, capacity,}=req.body

        const newSlot = new Slot({title: title, startTime, endTime, capacity, userId : req.user.id});

        await newSlot.save();
        res.status(200).json({
            message:"success",
            data:newSlot
        });
    } catch (error) {
        console.log(error)
    }
}
export const getMentorProfile=async(req,res)=>{
    try {
        const user=req.user
        const userId=user.id
        const mentor= await User.findById(userId);
        return res.status(200).json({
            message:"success",
            data:mentor
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"server error"
        })
    }

}