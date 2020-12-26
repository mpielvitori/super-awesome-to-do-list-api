import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model('Product', ProductSchema);
