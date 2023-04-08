import { Router } from "express";
import { CreateTodoController } from "./controller/CreateTodoController";
import { GetAllTodoController } from "./controller/GetAllTodoController";

export const router = Router();

router.post('/todos', new CreateTodoController().handle);
router.get('/todos', new GetAllTodoController().handle);