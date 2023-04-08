import { Request, Response } from "express";
import { CreateTodoService } from "../service/CreateTodoService";

export class CreateTodoController {
    async handle(req: Request, res: Response) {
        const service = new CreateTodoService();

        console.log(req.body)

        const { title, text } = req.body;

        const newTodo = await service.execute({ title, text });

        res.json(newTodo);
    }
}