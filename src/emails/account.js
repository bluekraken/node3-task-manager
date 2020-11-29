const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "andy@claroh.com",
    subject: "Thanks for signing up",
    text: `Welcome to the task manager, ${name}.  Let me know how you get along with the app.`
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendClosingEmail = (email, name) => {
  const msg = {
    to: email,
    from: "andy@claroh.com",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}.  Is there anything we could have done to keep your account?.`
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendWelcomeEmail, sendClosingEmail };
