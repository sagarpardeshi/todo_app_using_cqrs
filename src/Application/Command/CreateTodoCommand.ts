import { CreateTodoDTO } from "../DTO/TodoDTO";

export class CreateTodoCommand {
    constructor(public readonly todoData: CreateTodoDTO) {}
  }