import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  expiresAt: { type: Date, required: false },
  repeat: {
    type: String,
    required: true,
    enum: ['never', 'everyday'],
    default: 'never',
  },
  reminder: { type: Boolean, required: false, default: false },
}, { timestamps: true });
TaskSchema.index({ name: 'text', description: 'text', repeat: 'text' });
export default mongoose.model('Task', TaskSchema);
