import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Plant", plantSchema);
