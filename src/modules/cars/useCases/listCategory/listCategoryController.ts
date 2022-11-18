import { Request, Response } from "express";
import { ListCategoryUseCase } from "./listCategoryUseCase";

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  handle(req: Request, res: Response) {
    return res.json(this.listCategoryUseCase.execute());
  }
}
