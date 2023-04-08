import { Router } from "express";
import { CreateTodoController } from "./controller/createTodoController";
import { GetAllTodoController } from "./controller/getAllTodoController";

export const router = Router();

router.post('/todos', new CreateTodoController().handle);
router.get('/todos', new GetAllTodoController().handle);