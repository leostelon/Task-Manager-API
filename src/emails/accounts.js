const sgMail=require("@sendgrid/mail")

const sendgridAPIKey=process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:"nethajimessi10@gmail.com",
        subject:"This is my first mail",
        text:`Hi ${name}, It's nice to see in here!`
    })
}

const deleteEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:"nethajimessi10@gmail.com",
        subject:"See you again",
        text:`We are sorry to see you going, Hope you join us back ;)`
    })
}

module.exports={
    sendWelcomeEmail,
    deleteEmail
}