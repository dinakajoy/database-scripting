import mongoose from 'mongoose';

export interface UserDocument {
  name: String,
  email: String,
  phone: String,
  country: String,
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;