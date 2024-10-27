import { Todo } from '../../../Domain/Entity/Todo';
import { TodoRepository } from '../../../Domain/Repository/TodoRepository';
import { TodoModel } from './Schema/TodoSchema';

export class MongoTodoRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    const todos = await TodoModel.find();
    return todos.map(todo => new Todo(
      todo.title,
      todo.description,
      todo.completed,
      todo._id
    ));
  }

  async findById(id: string): Promise<Todo | null> {
    const todo = await TodoModel.findById(id);
    if (!todo) return null;
    return new Todo(todo.title, todo.description, todo.completed, todo._id);
  }

  async create(todo: Todo): Promise<Todo> {
    const created = await TodoModel.create(todo);
    return new Todo(
      created.title,
      created.description,
      created.completed,
      created._id
    );
  }

  async update(id: string, todo: Partial<Todo>): Promise<Todo | null> {
    const updated = await TodoModel.findByIdAndUpdate(
      id,
      { $set: todo },
      { new: true }
    );
    if (!updated) return null;
    return new Todo(
      updated.title,
      updated.description,
      updated.completed,
      updated._id
    );
  }

  async delete(id: string): Promise<boolean> {
    const result = await TodoModel.findByIdAndDelete(id);
    return result !== null;
  }
}