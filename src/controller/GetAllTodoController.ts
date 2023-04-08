import { Request, Response } from "express";
import { GetAllTodoService } from "../service/GetAllTodoService";

export class GetAllTodoController {
    async handle(req: Request, res: Response) {
        const service = new GetAllTodoService();

        const allTodos = await service.execute();

        res.json(allTodos);
    }
}