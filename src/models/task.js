import mongoose from 'mongoose';

const { Schema } = mongoose;

const RepeatEnum = {
  NEVER: 'never',
  EVERYDAY: 'everyday',
};

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  expiresAt: { type: Date, required: false },
  repeat: {
    type: String,
    required: true,
    enum: Object.values(RepeatEnum),
    default: RepeatEnum.NEVER,
  },
  reminder: { type: Boolean, required: false, default: false },
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);
