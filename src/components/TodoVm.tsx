import { ITodo } from "../types/todo";

export default class Todo implements ITodo {
  public id: string;
  public title: string = '';
  public isDone: boolean = false;

  constructor(title: string) {
    this.title = title;
    this.isDone = false;
    this.id = Math.random().toString().split('.')[1];
  }
}