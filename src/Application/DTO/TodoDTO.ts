export class CreateTodoDTO {
    title!: string;
    description!: string;
  }
  
  export class UpdateTodoDTO {
    title?: string;
    description?: string;
    completed?: boolean;
  }