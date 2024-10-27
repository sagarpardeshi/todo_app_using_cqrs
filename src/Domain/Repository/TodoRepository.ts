import { Todo } from '../Entity/Todo';
import { ObjectId } from 'mongodb';

export interface TodoRepository {
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo | null>;
  create(todo: Todo): Promise<Todo>;
  update(id: string, todo: Partial<Todo>): Promise<Todo | null>;
  delete(id: string): Promise<boolean>;
}
