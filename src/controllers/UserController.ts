import { Request, Response } from "express";
import EmailService from "../services/EmailService";

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

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { name: "Jefferson", email: "jefferson@gmail.com" },
      { subject: "Bem vindo ao Sistema", body: "Seja Bem vindo" }
    );

    return res.send("sucesso");
  },
};
