import { Todo } from "../../@data/entity/Todo";
import { Repository } from "typeorm";
export class TodoService {
  private readonly _todoRepository: Repository<Todo>;
}
