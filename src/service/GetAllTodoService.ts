import { db } from "../database/dataSource";
import { Todo } from "../database/entity/Todo";

export class GetAllTodoService {
    async execute() {
        const repo = db.getRepository(Todo);

        const allTodos = repo.find();

        return allTodos;

    }
}