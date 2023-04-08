import { Request, Response } from "express";
import { getAllTodoService } from "../service/getAllTodoService";

export class GetAllTodoController {
    async handle(req: Request, res: Response) {
        const service = new getAllTodoService();

        const allTodos = await service.execute();

        res.json(allTodos);
    }
}