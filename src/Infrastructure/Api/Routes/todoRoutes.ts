import { Router } from 'express';
import { TodoController } from '../Controllers/TodoController';

export const todoRouter = (todoController: TodoController): Router => {
  const router = Router();

  router.get('/', todoController.getAllTodos);
  router.get('/:id', todoController.getTodoById);
  router.post('/', todoController.createTodo);
  router.put('/:id', todoController.updateTodo);
  router.delete('/:id', todoController.deleteTodo);

  return router;
};
