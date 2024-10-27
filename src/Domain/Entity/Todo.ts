import { ObjectId } from 'mongodb';

export class Todo {
  constructor(
    public title: string,
    public description: string,
    public completed: boolean = false,
    public id?: ObjectId
  ) {}
}