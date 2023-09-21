import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'suiviProjecteur@outlook.com',
    pass: 'Projet973!',
  },
});

exports.sendmail = functions.https.onCall(async (data, context) => {
  try {
    const { to, subject, text } = data;
    
    const mailOptions = {
      from: 'suiviProjecteur@outlook.com',
      to,
      subject,
      text,
    };
    
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email', error);
    throw new functions.https.HttpsError('internal', 'Error sending email');
  }
});
