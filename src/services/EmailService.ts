interface IEmailTo {
  name: string;
  email: string;
}

interface IMessage {
  subject: string;
  body: string;
  attachment?: Array<string>;
}

interface IMessageDTO {
  to: IEmailTo;
  message: IMessage;
}

interface IEmailService {
  sendMail(Request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado  para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
