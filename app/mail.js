const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.PASSWORD
    }
});

const sendOTP = function (name, email, otp) {
    const message = createMessage(name, email, otp)
    return transporter.sendMail(message)
}

const createMessage = function (name, email, otp) {
    const subject = "TAP Email Verification"
    const text = `Hello ${name},\n\nHere's the OTP ${otp}`

    return {
        from: `Aftab Shaikh <${process.env.USER_NAME}>`,
        to: `${name} <${email}>`,
        subject: subject,
        text: text
    }
}

module.exports = {sendOTP}
