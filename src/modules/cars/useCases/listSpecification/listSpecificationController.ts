import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

export class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}
  handler(req: Request, res: Response): Response {
    return res.send(this.listSpecificationUseCase.execute());
  }
}
