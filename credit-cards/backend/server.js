const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ success: false, message: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Sender email from .env
        pass: process.env.PASSWORD, // App password from .env
      },
    });

    const mailOptions = {
      from: `"CardMatch Team" <${process.env.EMAIL}>`,
      to: email, // Recipient email from request
      subject: "Thank You for Signing Up!",
      text: `Hi there,
    
    Thank you for signing up for CardMatch. Your personalized credit card matches are being processed. We'll notify you as soon as they're ready!
    
    Best regards,
    The CardMatch Team`, // Plain text content
      html: `
        <h1>Welcome to CardMatch!</h1>
        <p>Hi there,</p>
        <p>Thank you for signing up for <strong>CardMatch</strong>. Your personalized credit card matches are being processed.</p>
        <p>We'll notify you as soon as they're ready!</p>
        <p>Best regards,<br><strong>The CardMatch Team</strong></p>
      `, // HTML content
    };
    

    console.log("Sending email to:", email); // Debug log
    await transporter.sendMail(mailOptions);

    res.status(200).send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message); // Log the error message
    res.status(500).send({ success: false, message: "Failed to send email", error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Email API running at http://localhost:${port}`);
});

