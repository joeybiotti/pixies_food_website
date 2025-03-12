require('dotenv').config();
const express = require('express');
const next = require('next');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post('/api/send-email', async (req, res) => {
    const { email, message, honeypot } = req.body;

    if (honeypot) {
      return res.status(400).json({ success: false, message: 'Bot detected' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
      debug: true,
    });

    const mailOptions = {
      from: email,
      to: 'pixiefoodco@gmail.com',
      subject: 'New Message from Contact Form',
      text: `Message: ${message}\n\nFrom: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
