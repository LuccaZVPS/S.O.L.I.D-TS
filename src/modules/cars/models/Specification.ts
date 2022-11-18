import { v4 as uuid } from "uuid";
export class Specification {
  private id?: string;
  name: string;
  created_at: Date;
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
