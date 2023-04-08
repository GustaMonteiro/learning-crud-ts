import { db } from "../database/dataSource";
import { Todo } from "../database/entity/Todo";

interface TodoParams {
    title: string,
    text: string
}

export class CreateTodoService {
    async execute({ title, text }: TodoParams) {
        const repo = db.getRepository(Todo);

        const newTodo = new Todo();
        newTodo.title = title;
        newTodo.text = text;
        newTodo.concluded = false;

        await repo.save(newTodo);

        return newTodo;

    }
}