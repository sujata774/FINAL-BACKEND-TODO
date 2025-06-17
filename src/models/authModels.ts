import { Schema, model } from "mongoose";
import { IUser } from "../types/authTypes";



const UserSchema: Schema = new Schema<IUser>({
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }
}, {
  autoIndex: false // ⛔ disables auto index creation
});


export default model<IUser>("User", UserSchema);
