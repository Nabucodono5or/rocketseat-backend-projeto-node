import { Request, Response } from "express";

const users = [
  {
    name: "Jefferson",
    email: "jefferson@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
