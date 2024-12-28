import nodemailer from "nodemailer";
import eventEmitter from "./eventEmitter.js";

const setupEventListener = () => {
  eventEmitter.on("send_email", (emailData) => {

    let transporter = nodemailer.createTransport({
      host: process.env.EPOSTA_HOST,
      port: process.env.EPOSTA_PORT,
      auth: {
        user: process.env.EPOSTA_USER,
        pass: process.env.EPOSTA_PASSWORD,
      },
    });

    let info = transporter.sendMail({
      from: process.env.EPOSTA_FROM,
      ...emailData,
    });

  });
};

export default setupEventListener;
