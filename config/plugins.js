// @ts-ignore
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env.int("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: "onboarding@resend.dev",
        defaultReplyTo: "onboarding@resend.dev",
      },
    },
  },
});
console.log("Lifecycle caricato!");
