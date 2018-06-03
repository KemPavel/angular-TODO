export class Todos {
  pending: boolean;
  error: Error;
  todos: Todo[];
};

export class Todo {
  title: string;
  id: string;
  completed: boolean;
};