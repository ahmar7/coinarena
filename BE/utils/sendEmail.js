const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      //   secure: Boolean(process.env.SECURE),
      auth: {
        user: "support@bitblaze.pro",
        pass: "S5%$#5&vHG",
      },
    });

    let data = await transporter.sendMail({
      from: "support@bitblaze.pro",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully", transporter, data);
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
