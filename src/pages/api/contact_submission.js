import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "discoverlincoln3@gmail.com",
      pass: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
    },
  });

  // Email 1: Confirmation to the user
  const userMailOptions = {
    from: "discoverlincoln3@gmail.com",
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: `New Contact Submission from ${name}, company ${company}`,
    text: `
You have a new contact submission.

Here is what they sent:
--------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${message}
--------------------------------
`,
  };

  try {
    await transporter.sendMail(userMailOptions);

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send emails" });
  }
}
