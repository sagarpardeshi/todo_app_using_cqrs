import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoTodoRepository } from './Infrastructure/Persistence/MongoDB/MongoTodoRepository';
import { TodoService } from './Application/Service/TodoService';
import { TodoController } from './Infrastructure/Api/Controllers/TodoController';
import { todoRouter } from './Infrastructure/Api/Routes/todoRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Dependency injection
const todoRepository = new MongoTodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

// Routes
app.use('/api/todos', todoRouter(todoController));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});