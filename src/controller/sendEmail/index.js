import nodemailer from 'nodemailer';
import { email, password, autorizedReciepents } from 'configuration'
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

  // We will determine the receipient email from the codeName received from the client
  // This is just a safeguard in case we don't want to share this email address in the client side
  // It uses autorizedReciepents from the configuration file, which is an array with all autorized recipients in this server
  const { 
    recipientCodeName, 
    emailAddress,
    firstName,
    lastName,
    subject,
    text
  } = messageInfo;
  const receipientEmail = autorizedReciepents.find( recipient => recipient.codeName === recipientCodeName).email;

  const mail = {
    from: { address: emailAddress, name: `${firstName} ${lastName}` },
    to: [ { address: receipientEmail } ],
    subject,
    text,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      sendMessage(res, { message: 'fail' });
    } else {
      sendMessage(res, { message: 'success' });
    }
  })
};
