import { Todo } from '../../Domain/Entity/Todo';
import { TodoRepository } from '../../Domain/Repository/TodoRepository';
import { CreateTodoDTO, UpdateTodoDTO } from '../DTO/TodoDTO';

export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async getTodoById(id: string): Promise<Todo | null> {
    return this.todoRepository.findById(id);
  }

  async createTodo(todoData: CreateTodoDTO): Promise<Todo> {
    const todo = new Todo(todoData.title, todoData.description);
    return this.todoRepository.create(todo);
  }

  async updateTodo(id: string, todoData: UpdateTodoDTO): Promise<Todo | null> {
    return this.todoRepository.update(id, todoData);
  }

  async deleteTodo(id: string): Promise<boolean> {
    return this.todoRepository.delete(id);
  }
}