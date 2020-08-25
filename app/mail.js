const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.PASSWORD
    }
});

const sendMail = function (name, email) {
    const message = createMessage(name, email)
    return transporter.sendMail(message)
}

const createMessage = function (name, email) {
    const subject = "TAP Email Verification"
    const text = `Hello ${name},\n\nHere's the OTP ${generateOTP()}`

    return {
        from: `Aftab Shaikh <${process.env.USER_NAME}>`,
        to: `${name} <${email}>`,
        subject: subject,
        text: text
    }
}

const generateOTP = () => Math.floor(Math.random() * 99999)

module.exports = {sendMail}
