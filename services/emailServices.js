require("dotenv").config()
const nodemailer = require("nodemailer");
const sendEmailService = async (email,token) =>{
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    const info = await transporter.sendMail({
        from: '"Mã Quên Mật Khẩu" <DarkT@gmail.com>', // sender address
        to: email , // list of receivers
        subject: "DarkT@gmail.com", // Subject line
        text: `Mã Đổi Mật Khẩu DarkT`, // plain text body
        html: `Mã Đổi Mật Khẩu Là :  ${token}`, // html body
      });
      return info
}

module.exports = sendEmailService