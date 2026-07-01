import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import process from 'process'

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Defaults to Gmail. Change if using another provider.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify connection configuration
transporter.verify(function (error) {
    if (error) {
        console.log('Nodemailer configuration error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate inputs
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Email options
        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: process.env.EMAIL_USER, // Your receiving email (where you want to get messages)
            subject: `New Portfolio Inquiry: ${subject}`,
            html: `
        <h3>New Contact Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
