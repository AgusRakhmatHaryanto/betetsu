const sendEmail = require("./send_email");
const { API_URL, CLIENT_URL } = require("../config/env");

const sendVerifyEmail = async (email, verifyToken) => {
  try {
    const verifyLink = `${CLIENT_URL}/${API_URL}/auth/verify/${verifyToken}`;
    const options = {
      to: email,
      subject: "Verify Email",
      text: `Verify your email address with this verify token link: ${verifyLink}`,
    };

    await sendEmail(options);
    if (!sendEmail) {
      throw new Error("Email not sent");
    }
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
    throw new Error({
      message: `Error sending email verification: ${error.message}`,
    });
  }
};

const sendOrderEmail = async (email, order) => {
  try {
    const options = {
      to: email,
      subject: "Order",
      text: `Order: ${JSON.stringify(order)}`,
    };
    await sendEmail(options);
    if (!sendEmail) {
      throw new Error("Email not sent");
    }
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
    throw new Error({
      message: `Error sending email verification: ${error.message}`,
    });
  }
};
module.exports = { sendVerifyEmail, sendOrderEmail };
