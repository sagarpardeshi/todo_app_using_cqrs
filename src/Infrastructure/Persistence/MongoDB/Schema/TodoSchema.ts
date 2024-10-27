import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, {
  timestamps: true
});

export const TodoModel = mongoose.model('Todo', TodoSchema);