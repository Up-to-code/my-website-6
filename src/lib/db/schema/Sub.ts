import mongoose, {Schema} from "mongoose";
interface ISubEmail {
    email : string
}

const subEmail: Schema<ISubEmail> = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    }
})

export const Sub = mongoose.models.Sub || mongoose.model<ISubEmail>("Sub", subEmail)

 