import nodemailer from 'nodemailer';
import { email, password } from 'configuration'
import { sendMessage } from 'utils/sendMessage/index';

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: email,
    pass: password
  }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

/**
 * Sends Email with the form information retrieved from the client
 * @param {object} messageInfo - object with all fields from the contact form
 */
export const sendEmail = async (req, res, next) => {
  const { messageInfo } = req.body;

  const mail = {
    from: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
    to: [ { Email: messageInfo.email } ],
    subject: messageInfo.subject,
    text: text,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      sendMessage(res, 'fail');
    } else {
      sendMessage(res, 'success');
    }
  })
};
