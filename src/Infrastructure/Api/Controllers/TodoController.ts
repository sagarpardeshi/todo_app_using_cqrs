import { Request, Response } from 'express';
import { TodoService } from '../../../Application/Service/TodoService';
import { CreateTodoDTO, UpdateTodoDTO } from '../../../Application/DTO/TodoDTO';

export class TodoController {
  constructor(private todoService: TodoService) {}

  getAllTodos = async (_req: Request, res: Response): Promise<void> => {
    try {
      console.log('finding nemo')
      const todos = await this.todoService.getAllTodos();
      console.log(todos)
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  getTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
      const todo = await this.todoService.getTodoById(req.params.id);
      if (!todo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const todoData: CreateTodoDTO = req.body;
      const todo = await this.todoService.createTodo(todoData);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const todoData: UpdateTodoDTO = req.body;
      const todo = await this.todoService.updateTodo(req.params.id, todoData);
      if (!todo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.todoService.deleteTodo(req.params.id);
      if (!success) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}