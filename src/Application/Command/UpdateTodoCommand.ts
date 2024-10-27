import { UpdateTodoDTO } from '../DTO/TodoDTO';

export class UpdateTodoCommand {
  constructor(
    public readonly id: string,
    public readonly todoData: UpdateTodoDTO
  ) {}
}