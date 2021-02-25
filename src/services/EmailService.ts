interface IEmailTo {
  name: string;
  email: string;
}

interface IMessage {
  subject: string;
  body: string;
  attachment?: Array<string>;
}

class EmailService {
  sendMail(to: IEmailTo, message: IMessage) {
    console.log(`Email enviado  para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
